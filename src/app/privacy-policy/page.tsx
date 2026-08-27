
export const metadata = {
  title: 'Privacy Policy | GoKawsar',
  description: 'Privacy Policy for GoKawsar travel platform. Learn how we collect, use, and protect your personal information.',
};

export default function page() {

const LastUpdate = "July 31, 2026"

return (
<main className="min-h-screen bg-[#f8fafc] lg:pt-25 py-10 md:py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased">
<div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-sm border border-slate-200/80 space-y-8">
        

<div className="border-b border-slate-100 pb-6">
  <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
    Privacy Policy
  </h1>
  <p className="text-xs sm:text-sm text-slate-500 mt-2">
    Last updated: {LastUpdate}
  </p>
</div>


<div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
<p>
  At <strong>GoKawsar</strong>, accessible from our platform, one of our main priorities is the privacy of our visitors and users. This Privacy Policy document contains types of information that is collected and recorded by GoKawsar and how we use it.
</p>


<section className="space-y-2">
  <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
    1. Information We Collect
  </h2>
  <p>
    When you book tickets or interact with our travel platform, we may collect personal information necessary to process your transactions and provide seamless services:
  </p>
  <ul className="list-disc list-inside pl-2 space-y-1 text-slate-600">
    <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and account credentials.</li>
    <li><strong>Booking Details:</strong> Travel routes, bus choices, seat numbers, and transaction reference IDs.</li>
    <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage analytics.</li>
  </ul>
</section>


<section className="space-y-2">
  <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
    2. How We Use Your Information
  </h2>
  <p>We use the information we collect in various ways, including to:</p>
  <ul className="list-disc list-inside pl-2 space-y-1 text-slate-600">
    <li>Process and manage your ticket bookings and issue E-Tickets.</li>
    <li>Send transaction updates, booking confirmations, and support SMS/Emails.</li>
    <li>Improve, personalize, and expand our platform’s user experience.</li>
    <li>Prevent fraud, secure accounts, and resolve customer support queries.</li>
  </ul>
</section>


 <section className="space-y-2">
   <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
     3. Payment & Data Security
   </h2>
   <p>
     GoKawsar prioritizes the safety of your transactions. We do not directly store your credit card or MFS (bKash/Nagad/Rocket) PIN details on our servers. All digital payments are processed through secure, SSL-encrypted payment gateways.
   </p>
 </section>


<section className="space-y-2">
  <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
    4. Cookies and Web Beacons
  </h2>
  <p>
    Like any other website, GoKawsar uses cookies to store information including visitors preferences and the pages on the website that the visitor accessed. The information is used to optimize the users experience by customizing our web page content based on visitors browser type and/or other information.
  </p>
</section>


<section className="space-y-2">
  <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
    5. Third-Party Services
  </h2>
  <p>
    We may partner with bus operators and service providers to issue tickets. Your relevant booking details (such as passenger name and contact number) are shared with the respective transport operator solely for boarding and verification purposes.
  </p>
</section>


  <section className="space-y-2">
    <h2 className="text-lg sm:text-xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
      6. Contact Us
    </h2>
    <p>
      If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact our team.
    </p>
    <div className="pt-2">
      <a
        href="/contact"
        className="inline-flex items-center justify-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-lg transition-colors"
      >
        Contact Support Team
      </a>
    </div>
  </section>
</div>

 

</div>
</main>
);
}