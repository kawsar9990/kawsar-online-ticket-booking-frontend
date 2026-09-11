'use client';

import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useGoogleTranslate } from '@/hooks/useGoogleTranslate';
import { 
  Bus, 
  Plane, 
  Train, 
  Ship, 
  Ticket, 
  Sparkles, 
  LucideIcon
} from 'lucide-react';

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
{ name: 'nav.bus', href: '/bus-tickets', icon: Bus },
{ name: 'nav.air', href: '/air', icon: Plane },
{ name: 'nav.train', href: '/train', icon: Train },
{ name: 'nav.launch', href: 'launch', icon: Ship },
{ name: 'nav.event', href: '/event', icon: Ticket },
{ name: 'nav.park',  href: '/park', icon: Sparkles, isBeta: true },
];


export default function Header(){
const { lang, toggleLanguage } = useGoogleTranslate();
const { t } = useTranslation();
const pathname = usePathname();


return(
<div 
className={`fixed top-0 left-0 right-0 z-[19999999] transition-all duration-300 hidden lg:block bg-white shadow-md py-4`}>
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

<nav className="notranslate flex items-center space-x-1 xl:space-x-2">
{navItems.map((item, index) => {
const Icon = item.icon;
const isActive = pathname === item.href;

return(
<Link
  key={item.href || index} 
  href={item.href}
  className={`group relative flex items-center space-x-1.5 xl:space-x-2 px-2.5 py-1.5 xl:px-4 xl:py-2 rounded-xl border-2 transition-all duration-200 font-medium ${
    isActive 
      ? 'border-[#009966] text-[#009966] bg-[#256652]/10 font-bold' 
      : 'border-transparent text-black hover:text-[#009966] hover:border-[#009966] hover:bg-[#256652]/10'
  }`}
>
<Icon 
  className={`w-4 h-4 xl:w-5 xl:h-5 transition-colors duration-200 ${
    isActive 
      ? 'text-[#009966]' 
      : 'text-black group-hover:text-[#256652]'
  }`} 
/>

<span className="text-xs xl:text-sm font-semibold">
  {t(item.name)}
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
  className={`notranslate relative w-16 h-8 xl:w-20 xl:h-10 rounded-full p-1 transition-all duration-300 flex items-center cursor-pointer border-2 focus:outline-none shadow-inner bg-gray-100 border-gray-300`}
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
  className={`absolute text-[10px] xl:text-xs font-bold text-gray-700 ${
    lang === 'EN' ? 'right-2 xl:right-3' : 'left-2 xl:left-3'
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