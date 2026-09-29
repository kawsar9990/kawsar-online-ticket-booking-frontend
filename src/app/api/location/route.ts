import { NextResponse } from 'next/server';
import type { LocationItem, LocationType, SearchKind } from '@/types/locationFilter';

interface PhotonProps {
  osm_id: number;
  osm_type: string;
  osm_key?: string;
  osm_value?: string;
  type?: string;
  name?: string;
  city?: string;
  district?: string;
  county?: string;
  state?: string;
  country?: string;
}
interface PhotonFeature {
  properties: PhotonProps;
  geometry: { coordinates: [number, number] };
}

const KIND_TAGS: Record<SearchKind, string[]> = {
  hotel: ['tourism:hotel', 'tourism:resort', 'tourism:guest_house'],
  park: ['leisure:park', 'tourism:theme_park', 'leisure:water_park'],
  tour: ['tourism:attraction', 'tourism:museum', 'natural:beach'],
  event: ['amenity:theatre', 'amenity:events_venue', 'amenity:conference_centre'],
  all: [],
};

const INCLUDE_PLACES: Record<SearchKind, boolean> = {
  hotel: true,
  park: true,
  tour: true,
  event: true,
  all: true,
};

const VALUE_TO_TYPE: Record<string, LocationType> = {
  hotel: 'hotel',
  resort: 'hotel',
  guest_house: 'hotel',
  motel: 'hotel',
  hostel: 'hotel',
  park: 'park',
  theme_park: 'park',
  water_park: 'park',
  attraction: 'attraction',
  museum: 'attraction',
  beach: 'attraction',
  theatre: 'venue',
  events_venue: 'venue',
  conference_centre: 'venue',
};

function mapType(p: PhotonProps): LocationType {
  if (p.osm_value && VALUE_TO_TYPE[p.osm_value]) return VALUE_TO_TYPE[p.osm_value];
  switch (p.type) {
    case 'country': return 'country';
    case 'state':   return 'state';
    case 'county':  return 'district';
    case 'city':    return 'city';
    default:        return 'area';
  }
}

function toItem(f: PhotonFeature): LocationItem | null {
  const p = f.properties;
  if (!p.name) return null;

  const type = mapType(p);
  const [lng, lat] = f.geometry.coordinates;
  const isPlace = ['city', 'country', 'state', 'district', 'area'].includes(type);

  const raw = isPlace
    ? [p.county, p.state, p.country]
    : [p.city ?? p.district ?? p.county, p.state, p.country];

  const parts = raw.filter(
    (x, i, arr): x is string => !!x && x !== p.name && arr.indexOf(x) === i
  );

  return {
    id: `${p.osm_type}${p.osm_id}`,
    name: p.name,
    subtitle: parts.join(', ') || p.country || p.name,
    type,
    lat,
    lng,
  };
}

async function photon(q: string, limit: number, tag?: string): Promise<LocationItem[]> {
  try {
    const params = new URLSearchParams({
      q,
      limit: String(limit),
      lang: 'en',
      lat: '23.8103',
      lon: '90.4125',
      location_bias_scale: '0.3',
    });
    if (tag) params.append('osm_tag', tag);

    const res = await fetch(`https://photon.komoot.io/api/?${params}`, {
      headers: { 'User-Agent': 'your-app-name/1.0 (you@example.com)' },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return ((data.features ?? []) as PhotonFeature[])
      .map(toItem)
      .filter((x): x is LocationItem => x !== null);
  } catch {
    return [];
  }
}

export async function GET(req: Request) {
  const sp = new URL(req.url).searchParams;
  const q = (sp.get('q') ?? '').trim();
  const kindParam = (sp.get('kind') ?? 'hotel') as SearchKind;
  const kind: SearchKind = kindParam in KIND_TAGS ? kindParam : 'hotel';

  if (q.length < 2) return NextResponse.json({ items: [] });

  const tags = KIND_TAGS[kind];

  const [places, ...tagged] = await Promise.all([
    INCLUDE_PLACES[kind] ? photon(q, 8) : Promise.resolve([] as LocationItem[]),
    ...tags.map((t) => photon(q, 4, t)),
  ]);

  const seen = new Set<string>();
  const items = [...places.slice(0, 5), ...tagged.flat(), ...places.slice(5)]
    .filter((i) => {
      const key = `${i.name}|${i.subtitle}|${i.type}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 10);

  return NextResponse.json({ items });
}