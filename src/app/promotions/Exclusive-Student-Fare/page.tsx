import Footerpromt from '../footerpro';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Exclusive Air Fare Deals for International Students | Gokawsar',
  description: 'Enjoy affordable flights with Extra Baggage for International Students on Gokawsar.',
};

export default function StudentFlightDealsPage() {
  return (
    <div className="min-h-screen lg:pt-20 font-sans text-gray-800 py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto overflow-hidden">
        
       
        <div className="pt-5 border-b border-gray-100 mb-6">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Exclusive Air Fare Deals for International Students
          </h1>
        </div>

     
        <div className="w-full mb-6">
          <img 
            src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1789275347/Student-fare-landing-page_dypxan.png" 
            alt="Special Student Fare Enjoy affordable flight with Extra Baggage" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="p-2 md:p-8 space-y-8">
          
        
          <div className="w-full">
            <table className="w-full border-collapse border-none md:border md:border-gray-300">
           
              <thead className="hidden md:table-header-group">
                <tr className="bg-gray-100 text-gray-900 font-bold text-center">
                  <th colSpan={2} className="border border-gray-300 px-4 py-3 text-base">
                    Available Student Offers
                  </th>
                </tr>
              </thead>
              
              <tbody className="block md:table-row-group space-y-4 md:space-y-0">
                
               
                <tr className="block md:table-row border border-gray-200 md:border-none rounded-xl p-4 md:p-0 bg-white shadow-sm md:shadow-none">
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-1 md:py-3 font-bold text-blue-600 md:text-gray-900 md:w-1/4 align-top text-base md:text-sm">
                    Qatar Airways
                  </td>
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-2 md:py-3 text-gray-700 text-xs md:text-sm">
                    <ul className="list-disc pl-4 md:pl-5 space-y-1">
                      <li>Extra Baggage 10 kg (if the baggage is in kg) or 1 PC (if the baggage is in PC)</li>
                      <li>A <strong>Qatar Membership Students Club</strong> Account is required to avail of this offer.</li>
                      <li>A valid student visa and a Qatar Membership Students Club Number must be provided.</li>
                      <li>This offer is available to students between the ages of 18 and 30.</li>
                    </ul>
                  </td>
                </tr>

               
                <tr className="block md:table-row border border-gray-200 md:border-none rounded-xl p-4 md:p-0 bg-white shadow-sm md:shadow-none">
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-1 md:py-3 font-bold text-blue-600 md:text-gray-900 md:w-1/4 align-top text-base md:text-sm">
                    Singapore Airlines
                  </td>
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-2 md:py-3 text-gray-700 text-xs md:text-sm">
                    <ul className="list-disc pl-4 md:pl-5 space-y-1">
                      <li>Extra Baggage 10 kg (if the baggage is in kg) or 1 PC (if the baggage is in PC)</li>
                      <li>Travelers need to open a <strong>KrisFlyer Account</strong> to avail of this offer.</li>
                      <li>A valid student visa, Confirmation of Enrolment (CoE), and KrisFlyer Account number must be provided.</li>
                      <li>This offer is applicable for students aged 12 and above.</li>
                    </ul>
                  </td>
                </tr>
   

                <tr className="block md:table-row border border-gray-200 md:border-none rounded-xl p-4 md:p-0 bg-white shadow-sm md:shadow-none">
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-1 md:py-3 font-bold text-blue-600 md:text-gray-900 align-top text-base md:text-sm">
                    Cathay Pacific
                  </td>
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-2 md:py-3 text-gray-700 text-xs md:text-sm">
                    <ul className="list-disc pl-4 md:pl-5 space-y-1">
                      <li>Up to 3 PC baggage allowances (Per Bag 23 kgs)</li>
                      <li>Destinations: North America, Europe, Japan, Korea, South-West Pacific</li>
                      <li>Age limit: 31 years or below</li>
                    </ul>
                  </td>
                </tr>

              
                <tr className="block md:table-row border border-gray-200 md:border-none rounded-xl p-4 md:p-0 bg-white shadow-sm md:shadow-none">
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-1 md:py-3 font-bold text-blue-600 md:text-gray-900 align-top text-base md:text-sm">
                    Sri Lankan Airlines
                  </td>
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-2 md:py-3 text-gray-700 text-xs md:text-sm">
                    <ul className="list-disc pl-4 md:pl-5 space-y-1">
                      <li>Extra baggage 10 kg (if the baggage is in kg) or 1 PC (if the baggage is in PC)</li>
                      <li>Available for Sri Lanka, Australia, London, Japan, South Korea, Malaysia.</li>
                    </ul>
                  </td>
                </tr>

              
                <tr className="block md:table-row border border-gray-200 md:border-none rounded-xl p-4 md:p-0 bg-white shadow-sm md:shadow-none">
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-1 md:py-3 font-bold text-blue-600 md:text-gray-900 align-top text-base md:text-sm">
                    Air China
                  </td>
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-2 md:py-3 text-gray-700 text-xs md:text-sm">
                    <ul className="list-disc pl-4 md:pl-5 space-y-1">
                      <li>Extra baggage 10 kg (if the baggage is in kg) or 1 PC (if the baggage is in PC)</li>
                      <li>Only available for Dhaka to China and China to Dhaka</li>
                      <li>
                        Before booking your Air China flight, please email at{" "}
                        <a href="mailto:kawsar158464@gmail.com" className="text-blue-600 underline">
                          kawsar158464@gmail.com
                        </a>{" "}
                        to get the available student fare for your booking/flight.
                      </li>
                    </ul>
                  </td>
                </tr>

               
                <tr className="block md:table-row border border-gray-200 md:border-none rounded-xl p-4 md:p-0 bg-white shadow-sm md:shadow-none">
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-1 md:py-3 font-bold text-blue-600 md:text-gray-900 align-top text-base md:text-sm">
                    China Eastern Airlines
                  </td>
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-2 md:py-3 text-gray-700 text-xs md:text-sm">
                    <ul className="list-disc pl-4 md:pl-5 space-y-1">
                      <li>Extra baggage 10 kg (if the baggage is in kg) or 1 PC (if the baggage is in PC)</li>
                      <li>Only available for Dhaka to China and China to Dhaka</li>
                      <li>
                        Before booking, travelers are requested to email at{" "}
                        <a href="mailto:kawsar158464@gmail.com" className="text-blue-600 underline">
                          kawsar158464@gmail.com
                        </a>{" "}
                        to inform us regarding the destination and flights schedule.
                      </li>
                    </ul>
                  </td>
                </tr>

             
                <tr className="block md:table-row border border-gray-200 md:border-none rounded-xl p-4 md:p-0 bg-white shadow-sm md:shadow-none">
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-1 md:py-3 font-bold text-blue-600 md:text-gray-900 align-top text-base md:text-sm">
                    Malaysia Airlines
                  </td>
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-2 md:py-3 text-gray-700 text-xs md:text-sm">
                    <ul className="list-disc pl-4 md:pl-5 space-y-1">
                      <li>Extra Baggage 10 kg (if the baggage is in kg).</li>
                      <li>Available for almost all Malaysia Airlines destinations except London.</li>
                      <li>Exclusive Student Fare.</li>
                      <li>
                        Before booking, students are requested to email at{" "}
                        <a href="mailto:kawsar158464@gmail.com" className="text-blue-600 underline">
                          kawsar158464@gmail.com
                        </a>{" "}
                        to inform us that he/she wants to avail the student facility.
                      </li>
                    </ul>
                  </td>
                </tr>

              
                <tr className="block md:table-row border border-gray-200 md:border-none rounded-xl p-4 md:p-0 bg-white shadow-sm md:shadow-none">
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-1 md:py-3 font-bold text-blue-600 md:text-gray-900 align-top text-base md:text-sm">
                    China Southern
                  </td>
                  <td className="block md:table-cell border-none md:border md:border-gray-300 px-2 md:px-4 py-2 md:py-3 text-gray-700 text-xs md:text-sm">
                    <ul className="list-disc pl-4 md:pl-5 space-y-1">
                      <li>Special Student Fare Available</li>
                      <li>
                        Before booking, students are requested to email at{" "}
                        <a href="mailto:kawsar158464@gmail.com" className="text-blue-600 underline">
                          kawsar158464@gmail.com
                        </a>{" "}
                        to request for the student facility.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          
          <div className="text-center pt-4">
            <Link 
              href="https://gokawsar.vercel.app" 
              target="_blank" 
              className="inline-block bg-blue-600 text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-blue-700 transition duration-200 shadow-md"
            >
              Book Now
            </Link>
          </div>

         
          <div className="border border-gray-200 rounded-xl p-5 bg-gray-50">
            <h3 className="text-lg font-bold text-gray-900 mb-3 border-b pb-2">Terms & Conditions</h3>
            <ul className="list-disc pl-5 text-xs md:text-sm text-gray-700 space-y-2 leading-relaxed">
              <li>Only students can avail this offer.</li>
              <li>
                To avail of the following offers, students must select the Student Fare option before searching for a flight. During the booking, choose the Book Now Pay Later option and mail at{" "}
                <a href="mailto:kawsar158464@gmail.com" className="text-blue-600 underline">kawsar158464@gmail.com</a> or call our hotline at 13701 for further processing.
              </li>
              <li>
                To get the student fare of <strong>China Eastern Airlines, China Southern Airlines & Air China</strong>, students must e-mail at{" "}
                <a href="mailto:kawsar158464@gmail.com" className="text-blue-600 underline">kawsar158464@gmail.com</a> before booking the ticket.
              </li>
              <li>These offers will apply only for international air tickets.</li>
              <li>These offers do not apply to code-share flights.</li>
              <li>Valid student visa is required to claim the offer.</li>
              <li>For <strong>Qatar Airlines</strong> students need to be a member of <strong>Qatar Student Club</strong>.</li>
              <li>For <strong>Singapore Airlines</strong> students need to have a <strong>KrisFlyer Account</strong>.</li>
              <li>The conditions may vary depending on the airline.</li>
              <li>The fare is subject to availability.</li>
              <li>
                Any kind of Refund, Cancellation and/or date change requests will follow the standard airline and <strong className="text-gray-900 font-semibold notranslate">Gokawsar</strong> policy along with <strong className="text-gray-900 font-semibold notranslate">Gokawsar</strong> convenience fee.
              </li>
              <li>Code-sharing flights will not be eligible for any of the student offer mentioned above.</li>
            </ul>
          </div>

        
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Frequently Asked Questions</h3>
            
            <div className="space-y-5 text-xs md:text-sm text-gray-700">
              <div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base">Who is eligible for this offer?</h4>
                <p className="mt-1 leading-relaxed">This offer is available for students traveling for educational purposes to the specified destination.</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base">What documentation is required?</h4>
                <p className="mt-1 leading-relaxed">To take advantage of this offer, you must provide a student visa for all airlines, except for Singapore Airlines and Qatar Airways, as specified.</p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base">How can I avail this offer?</h4>
                <p className="mt-1 leading-relaxed">
                  You can access this offer by emailing <a href="mailto:kawsar158464@gmail.com" className="text-blue-600 underline">kawsar158464@gmail.com</a> or calling our hotline at 13701.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base">Will there be a refund in case of cancellation?</h4>
                <p className="mt-1 leading-relaxed">
                  Refunds, cancellations, or date change requests will be subject to the standard policies of the airline and <strong className="text-gray-900 font-semibold notranslate">Gokawsar</strong>, along with <strong className="text-gray-900 font-semibold notranslate">Gokawsar</strong> convenience fee.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base">What are the contact details for any queries of <strong className="text-gray-900 font-semibold notranslate">Gokawsar</strong>?</h4>
                <p className="mt-1 leading-relaxed">
                  - Contact number: 01611236444 <br />
                  - Email: <a href="mailto:kawsar158464@gmail.com" className="text-blue-600 underline">kawsar158464@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

        </div>

        <Footerpromt />
      </div>
    </div>
  );
}