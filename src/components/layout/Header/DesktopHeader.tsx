'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Bus, 
  Plane, 
  Train, 
  Ship, 
  Ticket, 
  Sparkles, 
  LucideIcon
} from 'lucide-react';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

interface NavItem {
 name: string;
 href: string;
 icon: LucideIcon;
 isBeta?: boolean   
};

interface LogoConfig {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const logoData: LogoConfig = {
    src: "/assets/5.png",
    alt: "kawsar logo",
    width: 130,
    height: 130
}

const navItems : NavItem[] = [
{ name: 'Bus', href: '/', icon: Bus },
{ name: 'Air', href: '/air', icon: Plane },
{ name: 'Train', href: '/train', icon: Train },
{ name: 'Launch', href: 'launch', icon: Ship },
{ name: 'Event', href: '/event', icon: Ticket },
{ name: 'Park',  href: '/park', icon: Sparkles, isBeta: true },
];


export default function Header(){

const [isScrolled, setIsScrolled] = useState<boolean>(false);
const [isMenuLocked, setIsMenuLocked] = useState<boolean>(false);
const [lang, setLang] = useState<'EN' | 'BN'>('EN');
const pathname = usePathname();
useLockBodyScroll(isMenuLocked);

const isHomePage = pathname === '/';
const isSolidHeader = !isHomePage || isScrolled;

useEffect(() => {
    const handleScroll = () : void => {
     if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }   
    };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);  
});


const toggleLanguage = (): void => {
setLang((prev) => (prev === 'EN' ? 'BN' : 'EN'));
};

return(
<div 
className={`fixed top-0 left-0 right-0 z-[19999999] transition-all duration-300 hidden lg:block ${
        isSolidHeader 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-4 xl:py-5'
      }`}>
<div className="max-w-7xl mx-auto px-2 lg:px-4 xl:px-8">
<div className="flex items-center justify-between">

<div className="flex items-center">
  <Link href="/">
    <Image
      src={logoData.src}
      alt={logoData.alt}
      width={logoData.width}
      height={logoData.height}
      priority
      className="h-8 lg:h-9 xl:h-10 w-auto object-contain cursor-pointer"
    />
  </Link>
</div>

<nav className="flex items-center space-x-1 xl:space-x-2">
{navItems.map((item, index) => {
const Icon = item.icon;
const isActive = pathname === item.href;

return(
<Link
    key={item.href || index} 
    href={item.href}
   className={`group relative flex items-center space-x-1.5 xl:space-x-2 px-2.5 py-1.5 xl:px-4 xl:py-2 rounded-xl border-2 transition-all duration-200 font-medium ${
    isActive
      ? isSolidHeader 
        ? 'border-[#0DAC53] text-[#0DAC53] bg-emerald-50/50' 
        : 'border-[#0DAC53] text-[#00D492] bg-white/10'
      : isSolidHeader
        ? 'border-transparent text-black hover:border-[#0DAC53] hover:text-[#0DAC53] hover:bg-emerald-50/30'
        : 'border-transparent text-white hover:border-[#0DAC53] hover:text-emerald-400 hover:bg-white/10'
  }`}
>
 <Icon 
  className={`w-4 h-4 xl:w-5 xl:h-5 transition-colors duration-200 ${
    isActive
      ? isSolidHeader ? 'text-[#0DAC53]' : 'text-[#00D492]'
      : isSolidHeader
        ? 'text-black group-hover:text-[#0DAC53]'
        : 'text-white group-hover:text-emerald-400'
  }`} 
/>

<span className="text-xs xl:text-sm font-semibold">
  {item.name}
</span>
{item.isBeta && (
 <span className="absolute -top-2 -right-2 xl:-top-2.5 xl:-right-2.5 bg-red-600 text-white text-[9px] xl:text-[10px] font-bold px-1 py-0.2 xl:px-1.5 xl:py-0.5 rounded-md shadow-xs">
  BETA
</span>
)}   
</Link>
)
})}
</nav>



<div className="flex items-center space-x-2 xl:space-x-4">

<button
  onClick={toggleLanguage}
  className={`relative w-16 h-8 xl:w-20 xl:h-10 rounded-full p-1 transition-all duration-300 flex items-center cursor-pointer border-2 focus:outline-none shadow-inner ${
    isSolidHeader 
      ? 'bg-gray-100 border-gray-300' 
      : 'bg-white/20 border-white/40 backdrop-blur-sm'
  }`}
  title="Change Language"
>
    <div
    className={`w-5 h-5 xl:w-7 xl:h-7 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center font-bold text-[10px] xl:text-xs text-blue-900 ${
      lang === 'BN' ? 'translate-x-8 xl:translate-x-10' : 'translate-x-0'
    }`}
  >
    {lang}
  </div>
   <span
   className={`absolute text-[10px] xl:text-xs font-bold ${
     lang === 'EN' 
       ? 'right-2 xl:right-3 ' + (isSolidHeader ? 'text-gray-600' : 'text-white')
       : 'left-2 xl:left-3 ' + (isSolidHeader ? 'text-gray-600' : 'text-white')
   }`}
 >
   {lang === 'EN' ? 'BN' : 'EN'}
 </span>
</button>



<button
  className="bg-[#009966] text-[12px] cursor-pointer hover:bg-[#057e58] text-white font-semibold px-6 py-2.5 rounded-md text-sm transition-all duration-200 shadow-md"
>
 Sign In | Sign Up
</button>

</div>

</div>
</div>
</div>
)
}