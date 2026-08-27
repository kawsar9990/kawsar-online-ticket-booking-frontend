'use client';

import { useEffect } from "react";
import Lenis from 'lenis';


export default function SmoothScrollProvider(){

useEffect(()=> {

const navEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
const isReload = navEntries.length > 0 && navEntries[0].type === "reload";


const lenis = new Lenis({
    duration: 0.8,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    wheelMultiplier: 1.5,
    touchMultiplier: 2,
});

(window as any).lenis = lenis;


if (isReload) {
const currentScroll = window.scrollY || document.documentElement.scrollTop;
lenis.scrollTo(currentScroll, { immediate: true }); 
}


function raf(time: number) {
   lenis.raf(time);
   requestAnimationFrame(raf); 
}

const rafId = requestAnimationFrame(raf);


const resizeObserver = new ResizeObserver(() => {
lenis.resize();
})

if (document.body) {
resizeObserver.observe(document.body);
}

return()=> {
    cancelAnimationFrame(rafId);
    resizeObserver.disconnect();
    lenis.destroy();
    (window as any).lenis = null;
}

},[])

return null; 
}