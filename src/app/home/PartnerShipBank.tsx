import Image from "next/image";

interface PaymentGateway {
  name: string;
  logoUrl: string;
  width: number;
  height: number;
}


const paymentGateways: PaymentGateway[] = [
  {
    name: "bkash",
    logoUrl: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1785341880/bkash-home_hhuk50.png",
    width: 90,
    height: 40,
  },
  {
    name: "nagad",
    logoUrl: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1785341880/nagad-32_in9wgm.png",
    width: 80,
    height: 40,
  },
  {
    name: "rocket",
    logoUrl: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1785341880/rocket-home_l6co1c.svg",
    width: 80,
    height: 40,
  },
  {
    name: "upay",
    logoUrl: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1785341880/upay-home_1_mtcemb.svg",
    width: 50,
    height: 40,
  },
  {
    name: "tap",
    logoUrl: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1785341880/tap_oh6ex3.svg",
    width: 45,
    height: 40,
  },
  {
    name: "visa",
    logoUrl: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1785341881/visa-home_fa2wce.png",
    width: 75,
    height: 40,
  },
  {
    name: "mastercard",
    logoUrl: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1785341881/master-card-home_ec6taw.png",
    width: 55,
    height: 40,
  },
  {
    name: "amex",
    logoUrl: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1785341882/amex-home_tfuxcy.svg",
    width: 45,
    height: 40,
  },
  {
    name: "dbbl-nexus",
    logoUrl: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1785341882/nexus-debit-home_qgjzwu.svg",
    width: 70,
    height: 40,
  },
];

export default function PartnerShipCompany() {
return (
<footer className="w-full bg-white border-t border-gray-300">

<div className="max-w-7xl mx-auto px-5 py-7 flex flex-wrap items-center justify-center gap-6 md:gap-8">
  {paymentGateways.map((gateway, index) => (
    <div key={index} className="flex items-center justify-center">
      <Image
        src={gateway.logoUrl}
        alt={`${gateway.name} logo`}
        width={gateway.width}
        height={gateway.height}
        className="object-contain max-h-10 hover:opacity-90 transition-opacity"
      />
    </div>
  ))}
</div>


</footer>
  );
}