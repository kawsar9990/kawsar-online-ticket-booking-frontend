import Footerpromt from '../footerpro';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Every Saturday: Extra 8% OFF + FREE Delivery & Installation! | Gokawsar',
  description: 'Enjoy extra flat 8% discount on a minimum purchase of BDT 10,000 + FREE Delivery & Installation up to BDT 1,500 every Saturday on Gokawsar Shop.',
};

export default function SuperDealSaturdayPage() {
  return (
    <div className="min-h-screen lg:pt-25 font-sans text-gray-800 py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto overflow-hidden">
        
    
        <div className="pb-5 border-b border-gray-100">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Every Saturday: Extra 8% OFF + FREE Delivery & Installation!
          </h1>
        </div>

    
        <div className="w-full">
          <img 
            src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1789275030/1789010949_Super-Deal-Saturday-landing-banner_so5uok.jpg" 
            alt="Super Deal Saturday Extra 8% Off" 
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="p-6 md:p-8 space-y-8">
          
      
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-center text-xs md:text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-900 font-bold">
                  <th className="border border-gray-300 px-4 py-2.5 w-3/4">Offer</th>
                  <th className="border border-gray-300 px-4 py-2.5 w-1/4">Validity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-4 text-left leading-relaxed">
                    Enjoy an <strong>extra flat 8% discount</strong> on a minimum purchase of <strong>BDT 10,000</strong> + <strong>FREE Delivery & Installation up to BDT 1,500</strong> every Saturday!
                  </td>
                  <td className="border border-gray-300 px-4 py-4 font-semibold align-middle">
                    Till 30 September 2026
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

         
          <div className="text-center">
            <Link 
              href="http://gokawsar.vercel.app" 
              target="_blank" 
              className="inline-block text-blue-600 font-extrabold text-lg underline hover:text-blue-800 transition duration-200"
            >
              Shop Now
            </Link>
          </div>

          
          <div className="border border-gray-200 rounded-lg p-5 bg-gray-50">
            <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Terms & Conditions</h3>
            <ul className="list-disc pl-5 text-xs md:text-sm text-gray-700 space-y-2 leading-relaxed">
              <li>
                All <strong className="text-gray-900 font-semibold notranslate">Gokawsar</strong> users can enjoy the <strong>extra flat 8% discount</strong> and <strong>free delivery & installation offer</strong> on eligible purchases from <strong className="text-gray-900 font-semibold notranslate">Gokawsar</strong> Shop <strong>every Saturday</strong>.
              </li>
              <li>The 8% discount is applicable on a <strong>minimum purchase of BDT 10,000</strong>.</li>
              <li>This offer is valid till <strong>30th September</strong>.</li>
              <li>Coupon Code: <strong>SUPERSAT26</strong>.</li>
              <li>The 8% discount applies to <strong>selected brand categories</strong>.</li>
              <li>Free delivery and installation apply to <strong>nationwide destinations</strong>.</li>
              <li>
                <strong className="text-gray-900 font-semibold notranslate">Gokawsar</strong> will bear delivery and installation charges <strong>up to BDT 1,500</strong>. If the total charge <strong>exceeds BDT 1,500, the additional amount will be borne by the customer</strong>.
              </li>
              <li>
                Offers are available upon successful <strong>full payment through the <strong className="text-gray-900 font-semibold notranslate">Gokawsar</strong> app or website</strong> (<Link href="http://gokawsar.vercel.app" target='_blank' className="text-blue-600 underline">gokawsar.com</Link>).
              </li>
              <li>To qualify for the offer, customers are required to complete the transaction through <strong>the specific bank partners</strong>.</li>
              <li>Partial payment is <strong>not applicable</strong>. Customers <strong>must</strong> make the <strong>full payment online</strong> to qualify for the offer.</li>
              <li>Once an order has been packaged and prepared for shipment, customers will no longer be able to change the delivery or collection address.</li>
              <li>
                <strong className="text-gray-900 font-semibold notranslate">Gokawsar</strong> reserves the right to change or amend the offer terms and conditions, participating brands, or the campaign at any time without prior notice.
              </li>
              <li>If the respective brand is unable to ensure product availability or delivery, <strong className="text-gray-900 font-semibold notranslate">Gokawsar</strong> shall not be responsible.</li>
              <li>The return policy will be applicable subject to the respective brands terms and conditions.</li>
              <li>
                For incorrect payments or wrong item selection, customers are requested to contact <a href="mailto:kawsar158464@gmail.com" className="text-blue-600 underline">kawsar158464@gmail.com</a> or call <strong>13701</strong>. WhatsApp Message us.
              </li>
              <li>Delivery may be delayed due to force majeure events, including but not limited to political unrest, political events, and national/public holidays.</li>
            </ul>
          </div>

        </div>

        <Footerpromt />
      </div>
    </div>
  );
}