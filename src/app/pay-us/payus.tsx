
interface PaymentLogo {
  src: string;
  alt: string;
}

const cashOrBankLogos: PaymentLogo[] = [
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491083/p07_jk1vk4.png", alt: "Cash" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491083/logo-bal_jrk6zt.jpg", alt: "Bank Asia" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491083/logo-bbl_tic74s.png", alt: "BRAC Bank" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491082/logo-dbbl_ngacfy.png", alt: "EBL" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491082/logo-ebl_qr1prd.png", alt: "Eastern Bank" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491082/logo-ibbl_i304na.png", alt: "Islami Bank" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491082/logo-sibl_fwmvsf.png", alt: "SIBL" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491082/logo-cbl_opdqu9.jpg", alt: "City Bank" },
];

const cardLogos: PaymentLogo[] = [
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491373/p11_nbp8an.png", alt: "Visa" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491372/p12_zovzyx.png", alt: "MasterCard" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491372/p13_ifrtse.png", alt: "Amex" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491372/dbblnexus_f26bin.png", alt: "DBBL Nexus" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491371/unionpay_hbig0i.png", alt: "UnionPay" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491371/dinerclub_mgoss7.png", alt: "Diners Club" },
];

const mobileLogos: PaymentLogo[] = [
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491617/p14_cmqxsi.png", alt: "bKash" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491616/nagad_a3w1sh.png", alt: "Nagad" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491616/p16_s3vtyg.png", alt: "Rocket" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491615/mycash_zlfhob.png", alt: "MYCash" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491614/abbank_no8njf.png", alt: "AB Direct" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491613/okwallet_ahfvt0.png", alt: "OK Wallet" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491612/tapnpay_c2xxv6.png", alt: "TAP" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491612/dmoney_diohdf.png", alt: "Dmoney" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491611/islamic_wallet_zmkvau.png", alt: "Islamic Wallet" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491611/mcash_fibkdd.png", alt: "MCash" },
];

const internetLogos: PaymentLogo[] = [
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491614/abbank_no8njf.png", alt: "AB Bank" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491611/mcash_fibkdd.png", alt: "Islami Bank" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491082/logo-cbl_opdqu9.jpg", alt: "City Bank" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788492014/mtb_vxyhbn.png", alt: "MTB" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491083/logo-bal_jrk6zt.jpg", alt: "Bank Asia" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788492013/primebank_p6bu6d.png", alt: "Prime Bank" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788492163/southeast_uxb07d.jpg", alt: "Southeast Bank" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788491612/tapnpay_c2xxv6.png", alt: "TAP" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788492013/ipay_bpanym.png", alt: "iPay" },
  { src: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788492013/modhumoti_hudaek.png", alt: "Modhumoti Bank" },
];

export default function PayUs() {
  
return (
<div className="lg:px-10 lg:py-30">
<section className="w-full max-w-5xl mx-auto p-6 md:p-10 bg-white rounded-xl shadow-sm border border-gray-100 font-sans">
<div className="mb-8">
<h2 className="text-2xl md:text-3xl font-bold text-gray-800 inline-block border-b-2 border-indigo-900 pb-1">
  Pay Us
</h2>
</div>

<div className="space-y-10 text-center">
<div className="space-y-4">
<h3 className="text-lg md:text-xl font-semibold text-indigo-900">
  Cash or Bank Payment
</h3>
<div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
    {cashOrBankLogos.map((item, index) => (
      <img
        key={index}
        src={item.src}
        alt={item.alt}
        className="h-8 md:h-10 w-auto object-contain"
      />
    ))}
  </div>
</div>

    <div className="space-y-4">
      <h3 className="text-lg md:text-xl font-semibold text-indigo-900">
        Card Payment
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {cardLogos.map((item, index) => (
          <img
            key={index}
            src={item.src}
            alt={item.alt}
            className="h-8 md:h-10 w-auto object-contain"
          />
        ))}
      </div>
    </div>
   

        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-semibold text-indigo-900">
            Mobile Banking
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {mobileLogos.map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className="h-7 md:h-9 w-auto object-contain"
              />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg md:text-xl font-semibold text-indigo-900">
            Internet Banking
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {internetLogos.map((item, index) => (
              <img
                key={index}
                src={item.src}
                alt={item.alt}
                className="h-7 md:h-9 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
</div>
);
}