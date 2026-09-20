'use client';

import Marquee from 'react-fast-marquee';

export default function PartnerAirlines() {
  const airlines = [
    { id: 1, name: "Cathay Pacific", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196921/front_logo_novoair_ozqfqf.jpg" },
    { id: 2, name: "China Eastern", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196921/front_logo_etihad_1_jwhwyj.png" },
    { id: 3, name: "China Southern", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196922/front_logo_srilankan_1_pwxubk.jpg" },
    { id: 4, name: "Emirates", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196922/front_logo_singapore_1_p6jvhq.jpg" },
    { id: 5, name: "Gulf Air", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196922/front_logo_salam_okmkjd.jpg" },
    { id: 6, name: "IndiGo", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196922/front_logo_pia_t23oh7.jpg" },
    { id: 24, name: "Thai Airways", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196925/front_logo_thaismile_1_kce7g3.jpg" },
    { id: 7, name: "Kuwait Airways", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196923/front_logo_airindia_mjcsmv.png" },
    { id: 8, name: "Malaysia Airlines", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196924/front_logo_etihad_cpqyfs.png" },
    { id: 10, name: "Malindo Air", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196926/front_logo_kuwaitairways_elbzsx.jpg" },
    { id: 11, name: "PIA", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196926/front_logo_malindo_jpmyxg.jpg" },
    { id: 12, name: "Qatar Airways", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196927/front_logo_srilankan_bdno0m.jpg" },
    { id: 13, name: "Singapore Airlines", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196928/front_logo_spicejet_px8zog.jpg" },
    { id: 14, name: "Saudi Arabian", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196928/front_logo_maldivian_glusas.jpg" },
    { id: 15, name: "Turkish Airlines", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196926/front_logo_airasia_hgn7ki.jpg" },
    { id: 16, name: "Biman Bangladesh", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196929/front_logo_cathaydragon_tvgufe.png" },
    { id: 17, name: "US-Bangla", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196925/front_logo_qatar_yxq4zv.jpg" },
    { id: 18, name: "Air Astra", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196929/front_logo_biman_wpkxlh.jpg" },
    { id: 19, name: "Air Arabia", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196924/front_logo_usbangla_fytcid.jpg" },
    { id: 20, name: "Flydubai", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196931/front_logo_malaysia_xymhwd.jpg" },
    { id: 21, name: "Jazeera Airways", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196930/front_logo_turkish_ovjpnj.png" },
    { id: 22, name: "Oman Air", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196924/front_logo_usbangla_fytcid.jpg" },
    { id: 23, name: "SriLankan Airlines", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196930/front_logo_thaismile_dlyicc.jpg" },
    { id: 9, name: "Maldivian gg", logo: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789196927/front_logo_thai_ktyrlf.jpg" }
  ];

  
return (
<div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="bg-[#ebf0f5] rounded-2xl p-6 md:p-8 overflow-hidden">
        <h2 className="text-xl md:text-2xl font-bold text-[#1e293b] mb-6">
          Partner Airlines
        </h2>

    
        <Marquee
          gradient={false}
          speed={45}
          pauseOnHover={true}
          direction="left"
        >
          {airlines.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-md px-3 py-2 flex items-center justify-center w-[120px] h-[55px] shadow-sm border border-gray-100 mr-4"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}