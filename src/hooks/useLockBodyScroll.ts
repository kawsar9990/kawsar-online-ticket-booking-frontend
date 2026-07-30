'use client';

import { useEffect } from 'react';

export function useLockBodyScroll(isLocked: boolean){

useEffect(()=> {
if(!isLocked) return;

const originalStyle = window.getComputedStyle(document.body).overflow;
const lenis = (window as any).lenis;

if (lenis && typeof lenis.stop === "function") {
    lenis.stop();
}
document.body.style.overflow = "hidden";

return ()=> {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.start === "function") {
      lenis.start();
    }
    document.body.style.overflow = originalStyle
}
},[isLocked])
}