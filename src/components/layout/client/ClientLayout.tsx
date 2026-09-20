'use client';

import '@/i18n';
import I18nProvider from '@/providers/I18nProvider';
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import Header from "../Header/page";
import Footerpage from "../Footer/page";
import { NotFoundProvider, useNotFound } from "@/context/NotFoundContext";
import { LoaderProvider } from "@/context/LoaderContext";
import { ToastContainer } from "react-toastify";
import SmoothScrollProvider from "@/components/common/SmoothScroll/SmoothScrollProvider";

function LayoutContent({children} : {children: ReactNode}){

const pathname = usePathname();
const { isNotfound } = useNotFound();
const hideHeaderFooterRoutes = ['/not-found'].includes(pathname);
const shouldHideHeaderFooter = hideHeaderFooterRoutes || isNotfound

const isHotelDetailsPage = pathname.startsWith('/hotel-deal');
const shouldHideFooter = shouldHideHeaderFooter || isHotelDetailsPage;


return(
<>
<I18nProvider>
<ToastContainer style={{ zIndex: 999999999 }} />
<LoaderProvider>
{!shouldHideHeaderFooter && <Header />}
<SmoothScrollProvider />
{children}
{!shouldHideFooter && <Footerpage />}
</LoaderProvider>
</I18nProvider>
</>
)
}



export default function ClientLayout({ children } : {children: React.ReactNode}){
return(
<NotFoundProvider>
    <LayoutContent>
        {children}
    </LayoutContent>
</NotFoundProvider>
)
}