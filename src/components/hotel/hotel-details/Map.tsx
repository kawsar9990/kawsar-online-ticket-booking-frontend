interface ExploreNeighbourProps {
  mapRedirectUrl?: string; 
}

export default function ExploreNeighbour({ mapRedirectUrl }: ExploreNeighbourProps) {
  if (!mapRedirectUrl) return null;

return (
<div className="w-full max-w-[1280px] mx-auto px-5 py-5 font-sans">
<h3 className="text-xl font-bold text-gray-900 mb-4">
  Explore the neighbour
</h3>

  
<div className="w-full h-[180px] sm:h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-sm border border-gray-100">
  <iframe
    src={mapRedirectUrl}
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Explore the neighbour map"
    className="w-full h-full"
  ></iframe>
</div>
</div>
  );
}