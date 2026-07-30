'use client';

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
const shouldhide = hideHeaderFooterRoutes || isNotfound

return(
<>
<ToastContainer style={{ zIndex: 999999999 }} />
<LoaderProvider>
{!shouldhide && <Header />}
<SmoothScrollProvider />
{children}
{!shouldhide && <Footerpage />}
</LoaderProvider>
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