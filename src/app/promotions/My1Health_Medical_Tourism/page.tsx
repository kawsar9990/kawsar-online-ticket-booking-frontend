import type { Metadata } from 'next';
import Link from 'next/link';
import Footerpromt from '../footerpro';

export const metadata: Metadata = {
  title: 'Your Journey to Better Health Starts with My1Health | GoKawsar',
  description: 'Global Medical Excellence - 1st Globally Integrated Travel Healthcare Platform by GoKawsar & My1Health.',
};

export default function My1HealthPage() {
  
return (
    <div className="min-h-screen lg:pt-25 font-sans text-gray-800 py-10 px-4 md:px-8">
      <div className="max-w-5xl mx-auto overflow-hidden">
        
      
        <div className="pb-5">
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
            Your Journey to Better Health Starts with My1Health
          </h1>
        </div>

      
            <div className="w-full rounded-lg overflow-hidden mb-8">
              <img
                src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1789265749/Gemini_Generated_Image_kl1yb8kl1yb8kl1y_qnge3o.jpg" 
                alt="Discover Bangladesh Banner"
                className="w-full h-64 object-cover"
              />
            </div>



        <div className="p-6 md:p-8 space-y-10">
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-center text-xs md:text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-900 font-bold">
                  <th className="border border-gray-300 px-3 py-2 w-1/4">Step 1</th>
                  <th className="border border-gray-300 px-3 py-2 w-1/4">Step 2</th>
                  <th className="border border-gray-300 px-3 py-2 w-1/4">Step 3</th>
                  <th className="border border-gray-300 px-3 py-2 w-1/4">Step 4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-3 py-3">
                    Visit <Link href="http://gokawsar.vercel.app/" target='_blank' className="text-blue-600 underline">gokawsar.com</Link>
                  </td>
                  <td className="border border-gray-300 px-3 py-3">Click on Medical</td>
                  <td className="border border-gray-300 px-3 py-3">Search by Treatment, Condition, Speciality, Facility or Hospital and Location</td>
                  <td className="border border-gray-300 px-3 py-3">Then click on search button and find the right treatment globally</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <Link href="/about" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-lg transition duration-200">
              Place Your Query Here
            </Link>
          </div>

         
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Global Hospital Network</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-900 font-bold text-center">
                    <th className="border border-gray-300 px-4 py-2.5 w-1/3">Country</th>
                    <th className="border border-gray-300 px-4 py-2.5 w-2/3">Hospital List</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center">Dubai</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>American Hospital Dubai</li>
                        <li>Kings College Hospital</li>
                        <li>NMC Hospital and Burjeel Hospitals</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center">Thailand</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Bumrungrad International Hospital</li>
                        <li>Samitivej Hospital</li>
                        <li>Vejthani Hospital</li>
                        <li>MedPark Hospital</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center">Malaysia</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Sunway Medical Centre</li>
                        <li>Subang Jaya and KPJ Healthcare</li>
                        <li>Prince Court Medical Centre</li>
                        <li>Island Hospital</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center">Turkey</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Acibadem Group of Hospitals</li>
                        <li>Istanbul and Memorial Healthcare Group</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center">Singapore</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Raffles Hospital</li>
                        <li>Icon Cancer Centre</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center">China</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Beijing Jingdu Childrens Hospital</li>
                        <li>Kunming Tongren Hospital</li>
                        <li>Yanda International Hospital</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center">Saudi Arabia</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Saudi German Hospital Riyadh and Saudi Arabia, Jeddah City</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center">United Kingdom</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>The London Clinic Hospital</li>
                        <li>London and Cromwell Hospital</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center">South Korea</td>
                    <td className="border border-gray-300 px-4 py-3">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>JW Plastic Surgery in Seoul and Samsung Medical Centre in Seoul</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

       
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Major Demanding Treatments</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-900 font-bold text-center">
                    <th className="border border-gray-300 px-4 py-2.5 w-1/4">Country</th>
                    <th className="border border-gray-300 px-4 py-2.5 w-3/4">Major Demanding Treatments</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 text-center">Dubai</td>
                    <td className="border border-gray-300 px-4 py-3">Kings College Hospital, Dubai - Cardiology procedures (such as angioplasty and heart surgery)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 text-center">Thailand</td>
                    <td className="border border-gray-300 px-4 py-3">Bumrungrad International Hospital - Cardiology procedures, including advanced heart care such as angioplasty, bypass surgery, and other cardiac treatments.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 text-center">Malaysia</td>
                    <td className="border border-gray-300 px-4 py-3">Sunway Medical Centre - Orthopedic surgeries</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 text-center">Turkey</td>
                    <td className="border border-gray-300 px-4 py-3">Acibadem Group of Hospitals - Oncology treatments</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 text-center">Singapore</td>
                    <td className="border border-gray-300 px-4 py-3">Raffles Hospital - Cardiology procedures, including advanced heart care such as angioplasty, bypass surgery, and other cardiac treatments.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 text-center">Saudi Arabia</td>
                    <td className="border border-gray-300 px-4 py-3">Saudi German Hospital in Riyadh - Oncology treatments</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 text-center">United Kingdom</td>
                    <td className="border border-gray-300 px-4 py-3">Oncology treatments - The London Clinic Hospital</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 text-center">Abu Dhabi</td>
                    <td className="border border-gray-300 px-4 py-3">NMC Hospital - Cardiology procedures, including advanced heart care such as angioplasty, bypass surgery, and other cardiac treatments.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 text-center">South Korea</td>
                    <td className="border border-gray-300 px-4 py-3">JW Plastic Surgery in Seoul - Advanced cosmetic and plastic surgery procedures, including facial contouring, rhinoplasty, and body sculpting.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900 text-center">Germany</td>
                    <td className="border border-gray-300 px-4 py-3">Rehabilitation and neurological treatments, including post-stroke rehabilitation, neurorehabilitation, and musculoskeletal rehabilitation.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

       
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Medical Packages</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-xs md:text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-900 font-bold text-center">
                    <th className="border border-gray-300 px-4 py-2.5 w-1/4">Country</th>
                    <th className="border border-gray-300 px-4 py-2.5 w-3/4">Medical Packages</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center align-top">Dubai</td>
                    <td className="border border-gray-300 px-4 py-3 space-y-2">
                      <p className="font-bold text-gray-900">Kings College Hospital in Dubai</p>
                      <p className="italic text-gray-600">• Cardiology procedures - Health check packages that might be of interest:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Comprehensive Cardiac Check (Men under 40 & Women under 50) - AED 3,960.00</li>
                        <li>Comprehensive Cardiac Check (Men 40+ & Women 50+) - AED 4,515.00</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center align-top">Thailand</td>
                    <td className="border border-gray-300 px-4 py-3 space-y-2">
                      <p className="font-bold text-gray-900">Bumrungrad International Hospital, Bangkok</p>
                      <p className="italic text-gray-600">• Cardiology procedures: Health check-up packages that include cardiovascular assessments. Some relevant packages are below:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Executive Male Check-up (THB 22,000)</li>
                        <li>Executive Wellness Check-up (THB 28,500)</li>
                        <li>Comprehensive Male Check-up (THB 32,400)</li>
                        <li>Comprehensive Advance Male Check-up (THB 38,900)</li>
                        <li>Comprehensive Vitality Male Check-up (THB 65,700)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600 text-center align-top">Turkey</td>
                    <td className="border border-gray-300 px-4 py-3 space-y-2">
                      <p className="font-bold text-gray-900">Acibadem Group of Hospitals</p>
                      <p className="italic text-gray-600">• Oncology treatments - 11 dedicated Cancer Centres providing specialised cancer treatment as part of their comprehensive oncology services. Several preventative healthcare check-up packages, which include:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Executive Plus Check-Up (Female) - USD 4,500</li>
                        <li>Executive Plus Check-Up (Male) - USD 4,500</li>
                        <li>Comprehensive Check-Up (Female) - USD 3,250</li>
                        <li>Comprehensive Check-Up (Male) - USD 3,250</li>
                        <li>Executive Women Check-Up - USD 850</li>
                        <li>Executive Men Check-Up - USD 850</li>
                      </ul>
                      <p className="text-xs text-gray-500 italic mt-1">These packages may include screenings that support early detection and monitoring.</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <Footerpromt />
      </div>
    </div>
  );
}