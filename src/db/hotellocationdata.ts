import type { LocationItem } from "@/types/locationFilter";

export const DEFAULT_LOCATION: LocationItem = {
  id: 'cox',
  name: "Cox's Bazar",
  subtitle: 'Bangladesh',
  type: 'city',
  lat: 21.4272,
  lng: 92.0058,
};

export const TOP_DESTINATIONS: LocationItem[] = [
  { id: 'dhaka', name: 'Dhaka', subtitle: 'City', type: 'city', image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1790596316/images_hdsvbu.jpg', lat: 23.8103, lng: 90.4125 },
  { id: 'sajek', name: 'Sajek Valley', subtitle: 'City', type: 'city',  hot: true, image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1790598088/images_1_is0a3h.jpg', lat: 23.3815, lng: 92.2933 },
  { id: 'cox', name: "Cox's Bazar", subtitle: 'City', type: 'city', hot: true, image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1790598165/images_2_mnav3d.jpg', lat: 21.4272, lng: 92.0058 },
  { id: 'sylhet', name: 'Sylhet', subtitle: 'City', type: 'city', hot: true, image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1790598672/images_3_bukg9e.jpg', lat: 24.8949, lng: 91.8687 },
  { id: 'bandarban', name: 'Bandarban', subtitle: 'City', type: 'city', hot: true, image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1790598982/images_4_xcpgu6.jpg', lat: 22.1953, lng: 92.2184},
  { id: 'dubai', name: 'Dubai', subtitle: 'City', type: 'city', hot: true, image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1790599186/images_5_ecpnlc.jpg', lat: 25.2048, lng: 55.2708 },
  { id: 'paris', name: 'Paris', subtitle: 'City', type: 'city', hot: true, image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1790599618/images_6_pimrdv.jpg', lat: 48.8566, lng: 2.3522 },
  { id: 'sreemangal', name: 'Sreemangal', subtitle: 'City', type: 'city', image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1790599662/images_7_dpiisv.jpg', lat: 24.3065, lng: 91.7296 },
];


export const TOP_PROPERTIES: LocationItem[] = [
  { id: 'h1', name: 'Sayeman Beach Resort', subtitle: "Cox's Bazar", type: 'hotel', hot: true, image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476379/sayeman_-1_to7ebb.png' },
  { id: 'h2', name: 'Bhawal Resort And Spa', subtitle: 'Gazipur', type: 'hotel', image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476378/bhawal-resort-spa-20210907174024_hkig96.jpg' },
  { id: 'h3', name: 'Grand Sylhet Hotel & Resort', subtitle: "Sylhet", type: 'hotel', hot: true, image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476380/267736179_149939317369872_2872125975221274736_n_hjvlaw.jpg' },
  { id: 'h4', name: 'Grand Sultan Tea Resort & Golf', subtitle: 'Srimongal', type: 'hotel', image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476378/343430076_915485859505434_797408506640452438_n_gnm9jr.jpg' },
  { id: 'h5', name: 'Sea Pearl Beach Resort and Spa Ltd.', subtitle: "Cox's Bazar", type: 'hotel', image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476378/agoda-2564409-60592569-839740_c7gfou.jpg' },
  { id: 'h6', name: 'Best Western Heritage', subtitle: "Cox's Bazar", type: 'hotel', image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476378/best-western-plus-heritage_lv2hfi.jpg' },
  { id: 'h7', name: 'Seagull Hotel,Coxs Bazar', subtitle: "Cox's Bazar", type: 'hotel', image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476377/rsdtkfyguih_wbs8qd.jpg' },
  { id: 'h8', name: 'Dream Square Resort', subtitle: 'Gazipur', type: 'hotel', image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1789476378/369785529_305623735457322_3320508981205518508_n_fxeoyo.jpg' },
];