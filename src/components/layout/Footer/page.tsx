'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaTelegram ,FaInstagram  } from "react-icons/fa";
import { Send } from "lucide-react";
import { notify } from "@/utils/toast";


export default function Footerpage() {

const [email, setEmail] = useState("");
const { t } = useTranslation();

const handleSubscribe = () => {
  if(email){
    notify.success("Subscribed successfully!");
    setEmail("");
  }
}



return (
<footer 
  className="w-full bg-white text-gray-700 border-t border-gray-300 transition-colors duration-300" 
  style={{userSelect: "none"}}
>     

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-y-10">
          
<div className="md:col-span-4 lg:col-span-2 space-y-4">
<Link href="/" className="inline-block">
<Image
    src="/assets/5.png" 
    alt="ShifaSoft Logo"
    width={100}
    height={50}
    className="h-20 w-[200] object-contain"
  />
</Link>

<p className="text-sm text-gray-500 max-w-sm leading-relaxed capitalize">
  <span className="notranslate"> GoKawsar </span> – Smart Online Ticket Booking & Travel Management ERP for passengers and transport services across Bangladesh.
</p>

<div className="pt-1 max-w-sm">
<h4 className="text-base font-semibold text-gray-900 mb-2">
  Keep up with <span className="notranslate"> GoKawsar </span>platform
</h4>
              
  <form onSubmit={handleSubscribe} className="flex flex-col notranslate sm:flex-row gap-2">
    <div className="relative w-full">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        required
        className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-200"
      />
    </div>
    <button
      type="submit"
      className="px-5 py-2.5 rounded-xl bg-[#1fbe37] hover:bg-[#079e25] text-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 shrink-0 cursor-pointer"
    >
      <span>Subscribe</span>
      <Send className="w-3.5 h-3.5" />
    </button>
  </form>
</div>


  <div className="flex items-center gap-3 pt-2">
    <a
      href="https://www.facebook.com/profile.php?id=61576560495361"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-600 hover:text-white  transition-all duration-300"
    >
      <FaFacebookF className="w-4 h-4" />
    </a>
    <a
      href="https://shorturl.at/Me6vH"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-600 hover:text-white transition-all duration-300"
    >
      <FaLinkedinIn className="w-4 h-4" />
    </a>
    <a
      href="https://wa.me/+8801602084187"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-gray-100  flex items-center justify-center text-gray-600  hover:bg-emerald-600 hover:text-white  transition-all duration-300"
    >
      <FaWhatsapp className="w-4 h-4" />
    </a>
       <a
      href="https://t.me/+8801602084187"
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-gray-100  flex items-center justify-center text-gray-600  hover:bg-emerald-600 hover:text-white  transition-all duration-300"
    >
      <FaTelegram className="w-4 h-4" />
    </a>
       <a
      href="https://www.instagram.com/tmr_kawsar?igsh=MWZmOXE0cXljemMxMA=="
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 rounded-full bg-gray-100  flex items-center justify-center text-gray-600  hover:bg-emerald-600 hover:text-white  transition-all duration-300"
    >
      <FaInstagram className="w-4 h-4" />
    </a>
  </div>
</div>

<div className="">
  <h3 className="font-bold notranslate text-gray-900 text-base mb-4">
    {t('footer.Explore')}
  </h3>
  
  <ul className="space-y-3 text-[13px] xl:text-[15px] text-gray-600 gray-400">
    <li><Link href="/about" className="hover:text-emerald-600 hover:underline transition-colors">About Us</Link></li>
    <li><Link href="/contact" className="hover:text-emerald-600 hover:underline transition-colors notranslate">{t('footer.Contact Us')}</Link></li>
    <li><Link href="/why-gokawsar" className="hover:text-emerald-600 hover:underline transition-colors notranslate">{t('footer.Why Gokawsar')}</Link></li>
    <li><Link href="/our-office" className="hover:text-emerald-600 hover:underline transition-colors notranslate">{t('footer.Our Office')}</Link></li>
    <li><Link href="/" className="hover:text-emerald-600 hover:underline transition-colors">Cancel Ticket</Link></li>
    <li><Link href="/" className="hover:text-emerald-600 hover:underline transition-colors">Bus Reservation</Link></li>
  </ul>
</div>


<div>
  <h3 className="font-bold text-gray-900  text-base mb-4">
    Services
  </h3>
  <ul className="space-y-3 text-[13px] xl:text-[15px] text-gray-600 gray-400">
    <li><Link href="/bus-tickets" className="hover:text-emerald-600 hover:underline transition-colors">Bus Tickets</Link></li>
    <li><Link href="/event-tickets" className="hover:text-emerald-600 hover:underline transition-colors">Event Tickets</Link></li>
    <li><Link href="/" className="hover:text-emerald-600 hover:underline transition-colors">Holiday Tickets</Link></li>
    <li><Link href="/" className="hover:text-emerald-600 hover:underline transition-colors">Visa Tickets</Link></li>
    <li><Link href="/" className="hover:text-emerald-600 hover:underline transition-colors">Hotel Tickets</Link></li>
    <li><Link href="/" className="hover:text-emerald-600 hover:underline transition-colors">Park Tickets</Link></li>
  </ul>
</div>


<div>
  <h3 className="font-bold text-gray-900  text-base mb-4">
    Support
  </h3>
  <ul className="space-y-3 text-[13px] xl:text-[15px] text-gray-600 gray-400">
    <li><Link href="/how-to-use" className="hover:text-emerald-600 hover:underline transition-colors">How To Use</Link></li>
    <li><Link href="/pay-us" className="hover:text-emerald-600 hover:underline transition-colors">How To Pay</Link></li>
    <li><Link href="/faq" className="hover:text-emerald-600 hover:underline transition-colors notranslate">{t('footer.FAQ')}</Link></li>
    <li><Link href="/refund-policy" className="hover:text-emerald-600 hover:underline transition-colors">Refund Policy</Link></li>
    <li><Link href="/privacy-policy" className="hover:text-emerald-600 hover:underline transition-colors">Privacy Policy</Link></li>
    <li><Link href="/terms-condition" className="hover:text-emerald-600 hover:underline transition-colors">Terms & Condition</Link></li>
  </ul>
</div>


<div>
  <h3 className="font-bold text-gray-900  text-base mb-4">
    Updates
  </h3>
  <ul className="space-y-3 text-[13px] xl:text-[15px] text-gray-600 gray-400">
    <li><Link href="/blog" className="hover:text-emerald-600 hover:underline transition-colors">Blogs</Link></li>
     <li><Link href="/promotions" className="hover:text-emerald-600 hover:underline transition-colors">Promotion</Link></li>
    </ul>
</div>

</div>
</div>


<div className="bg-gray-100 border-t border-gray-200  py-6 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-600 gray-400">
           

<div className="flex items-center gap-4 sm:gap-6 ">
  <Link href="tel:+8801602084187" className="hover:text-emerald-600 transition-colors notranslate">{t('footer.Support Center')}</Link>
  <Link href="/help-center" className="hover:text-emerald-600 transition-colors notranslate">{t('footer.Help Center')}</Link>
</div>


        <div className="text-[10px] md:text-[15px]">
          © 2026. All rights reserved. Designed & Developed by Kawsar
        </div>
      </div>
    </div>


    </footer>
  );
}