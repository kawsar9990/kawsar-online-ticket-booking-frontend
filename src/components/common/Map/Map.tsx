'use client'


const Map: React.FC = () => {
  return (
    <div className="w-full h-[320px] md:h-[400px] rounded-xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-100">
      <iframe
        title="Tangail Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116520.5739812791!2d89.8828352!3d24.2513222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fdfb4625d97f23%3A0x6d9f82d00166258!2sTangail!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full block"
      ></iframe>
    </div>
  );
};

export default Map;