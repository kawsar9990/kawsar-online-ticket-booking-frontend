'use client';

import { useEffect } from "react";
import Lenis from 'lenis';


export default function SmoothScrollProvider(){

useEffect(()=> {
const lenis = new Lenis({
    duration: 0.6,
    easing: (t: number) => 1 - Math.pow(1 - t, 3),
    smoothWheel: true,
    wheelMultiplier: 1.5,
    touchMultiplier: 2,
});

(window as any).lenis = lenis;

function raf(time: number) {
   lenis.raf(time);
   requestAnimationFrame(raf); 
}

const rafId = requestAnimationFrame(raf);

return()=> {
    cancelAnimationFrame(rafId);
    lenis.destroy();
    (window as any).lenis = null;
}

},[])



return null; 
}