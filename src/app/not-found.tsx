'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useNotFound } from '@/context/NotFoundContext';

export default function NotFound() {

const { setIsNotFound } = useNotFound();

useEffect(()=> {
setIsNotFound(true);
return () => setIsNotFound(false)
}, [setIsNotFound])

return (
<div className="min-h-screen bg-[#050608] flex flex-col items-center justify-center text-white px-4">
      
<motion.div 
initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
className="text-center"
>
<h2 className="text-sm tracking-widest text-cyan-400 uppercase mb-4">gokawsar</h2>
        
<h1 className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 mb-6">
404
</h1>
        
<p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-md">
Oops! We have Lost the Pulse.
</p>
        
<p className="text-gray-500 mb-10 max-w-sm mx-auto">
The page you are looking for has disconnected from the Gokawsar.
</p>


  <Link href="/">
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 cursor-pointer bg-transparent border border-cyan-500/50 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300"
    >
      RETURN TO HOME
    </motion.button>
  </Link>
</motion.div>

<footer className="absolute bottom-8 text-gray-600 text-sm">
 Kawsar Ahmed Developer © {new Date().getFullYear()}
</footer>
</div>
  );
}