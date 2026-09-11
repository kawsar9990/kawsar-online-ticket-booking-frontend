'use client'

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useGoogleTranslate } from '@/hooks/useGoogleTranslate';

import { 
  FaBus, 
  FaPlane, 
  FaTrain, 
  FaShip, 
  FaCalendarDays, 
  FaFortAwesome, 
  FaHeadset, 
  FaPhone, 
  FaXmark, 
  FaBars 
} from 'react-icons/fa6';


interface IMenuItem {
  label: string;
  icon: IconType;
  href: string;
  badge?: string;
}



export default function MobileHeader(){
const [isLeftOpen, setIsLeftOpen] = useState<boolean>(false);
const [isRightOpen, setIsRightOpen] = useState<boolean>(false);
const { lang, toggleLanguage } = useGoogleTranslate();
const { t } = useTranslation();
const pathname : string = usePathname();

useLockBodyScroll(isLeftOpen || isRightOpen);

const menuItems: IMenuItem[] = [
    { label: 'nav.bus', icon: FaBus, href: '/bus-tickets' },
    { label: 'nav.air', icon: FaPlane, href: '/air' },
    { label: 'nav.train', icon: FaTrain, href: '/train' },
    { label: 'nav.launch', icon: FaShip, href: '/launch' },
    { label: 'nav.event', icon: FaCalendarDays, href: '/events' },
    { label: 'nav.park', icon: FaFortAwesome, href: '/park', badge: 'Beta' },
  ];


return(
<div>
<header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          

<div className="flex items-center gap-3">
<button
  onClick={() => setIsLeftOpen(true)}
  className="p-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-md transition"
  aria-label="Open Menu"
>
  <FaBars className="w-5 h-5" />
</button>

<Link href="/" className="font-bold text-blue-900 cursor-pointer">
<Image 
src="/assets/5.png"
alt='fg'
width={50}
height={50}
className='w-20'/>
</Link>
</div>


<button
  onClick={() => setIsRightOpen(true)}
  className="border border-blue-600 p-2 rounded-md cursor-pointer text-blue-600 hover:bg-blue-50 transition"
  aria-label="Open Settings"
>
<FaBars className="w-5 h-5" />
</button>
</div>
</header>


<div className="h-16 w-full"></div>
{(isLeftOpen || isRightOpen) && (
  <div 
    onClick={() => { setIsLeftOpen(false); setIsRightOpen(false); }}
    className="fixed inset-0 bg-black/50 z-[70] transition-opacity backdrop-blur-sm"
  />
)}


<div className={`fixed top-0 left-0 h-full w-72 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isLeftOpen ? 'translate-x-0' : '-translate-x-full'}`}>
<div className="p-4 border-b flex justify-between items-center">
         
<div>
<Image 
src="/assets/5.png"
alt='fg'
width={60}
height={60}
className='w-20'/>
</div>

<button 
  onClick={() => setIsLeftOpen(false)} 
  className="p-1.5 text-gray-500 cursor-pointer hover:text-black hover:bg-gray-100 rounded-full transition"
  aria-label="Close Menu"
>
  <FaXmark className="w-5 h-5" />
</button>
</div>

<div className="notranslate flex-1 overflow-y-auto p-4 space-y-1">
{menuItems.map((item: IMenuItem, index: number) => {
const Icon = item.icon;
const isActive: boolean = pathname === item.href;

return (
<Link
  key={index}
  href={item.href}
  onClick={() => setIsLeftOpen(false)}
  className={`group cursor-pointer flex items-center px-3 py-3 rounded-lg font-medium transition duration-150 ${
    isActive 
      ? 'text-emerald-600 bg-emerald-50' 
      : 'text-gray-800 hover:text-emerald-600 hover:bg-emerald-50/50'
  }`}
>
<div className="flex cursor-pointer items-center gap-4">
  <Icon className={`w-5 h-5 transition ${
    isActive 
      ? 'text-emerald-600' 
      : 'text-gray-700 group-hover:text-emerald-600'
  }`} />

<div className="flex items-center cursor-pointer gap-1.5 relative">
<span className={`text-base transition ${
  isActive 
    ? 'text-emerald-600 font-semibold' 
    : 'group-hover:text-emerald-600'
}`}>
  {t(item.label)}
</span>

{item.badge && (
    <span className="relative -top-1.5 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.2 rounded-full uppercase leading-tight shadow-sm">
      {item.badge}
    </span>
)}
</div>
</div>
</Link>
);
})}

<div className="my-4 border-t border-gray-100" />

<Link
  href="/contact"
  onClick={() => setIsLeftOpen(false)}
  className={`group flex items-center cursor-pointer gap-4 px-3 py-3 rounded-lg font-medium transition ${
    pathname === '/contact'
      ? 'text-emerald-600 bg-emerald-50'
      : 'text-gray-800 hover:text-emerald-600 hover:bg-emerald-50/50'
  }`}
>
  <FaHeadset className={`w-5 h-5 transition ${
    pathname === '/contact' ? 'text-emerald-600' : 'text-gray-700 group-hover:text-emerald-600'
  }`} />
  <span>Contact Us</span>
</Link>

<a
  href="https://wa.me/8801602084187"
  target='_blank'
  className="group flex items-center justify-between px-3 py-3 rounded-lg text-gray-800 hover:text-emerald-600 hover:bg-emerald-50/50 transition font-medium"
>
  <div className="flex items-center gap-4">
    <FaPhone className="w-4 h-4 text-gray-700 group-hover:text-emerald-600 transition" />
    <span className="font-semibold">+8801602084187</span>
  </div>
</a>
</div>
</div>




<div className={`fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isRightOpen ? 'translate-x-0' : 'translate-x-full'}`}>
<div className="p-4 border-b flex justify-between items-center">
  <h2 className="font-bold text-gray-800 text-lg">Menu</h2>
  <button 
    onClick={() => setIsRightOpen(false)} 
    className="p-1.5 text-gray-500 hover:text-black cursor-pointer hover:bg-gray-100 rounded-full transition"
    aria-label="Close Settings"
  >
    <FaXmark className="w-5 h-5" />
  </button>
</div>


<div className="p-4 space-y-6 flex-1 overflow-y-auto">
<div>
  <p className="text-xs text-gray-500 mb-2 font-semibold">Select Language</p>
  <div className="flex bg-gray-100 p-1 rounded-lg transition-all duration-300">
    <button 
      onClick={() => lang !== 'BN' && toggleLanguage()} 
      className={`flex-1 cursor-pointer py-2 text-xs font-semibold rounded-md transform transition-transform duration-300 ${lang === 'BN' ? 'bg-white shadow text-emerald-600' : 'text-gray-600'}`}
    >
      Bangla (BN)
    </button>
    <button 
      onClick={() => lang !== 'EN' && toggleLanguage()} 
      className={`flex-1 cursor-pointer py-2 text-xs font-semibold rounded-md transform transition-transform duration-300 ${lang === 'EN' ? 'bg-white shadow text-emerald-600' : 'text-gray-600'}`}
    >
      English (EN)
    </button>
  </div>
</div>

<hr className="border-gray-100" />

<div className="space-y-3">
  <button 
    className="block w-full text-center cursor-pointer py-2.5 text-sm font-semibold border border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition"
  >
    Login
  </button>
  <button 
    className="block w-full text-center cursor-pointer py-2.5 text-sm font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 shadow-sm transition"
  >
    Sign Up
  </button>
</div>
</div>
</div>    
</div>
)
}