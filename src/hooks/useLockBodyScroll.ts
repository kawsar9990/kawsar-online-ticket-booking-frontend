'use client';

import { useEffect } from 'react';

export function useLockBodyScroll(isLocked: boolean){

useEffect(()=> {
if(!isLocked) return;

const body = document.body;
const html = document.documentElement;

const originalBodyOverflow = body.style.overflow;
const originalHtmlOverflow = html.style.overflow;

const lenis = (window as any).lenis;

if (lenis && typeof lenis.stop === "function") {
    lenis.stop();
}

body.style.overflow = 'hidden';
html.style.overflow = 'hidden';

return ()=> {
    if (lenis && typeof lenis.start === "function") {
      lenis.start();
    }
    
      body.style.overflow = originalBodyOverflow;
      html.style.overflow = originalHtmlOverflow;
}
},[isLocked])
}