'use client';

import { HashLoader } from 'react-spinners';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

interface GlobalLoaderType{
    show: boolean;
}

export function GlobalLoader({ show }: GlobalLoaderType){

useLockBodyScroll(show);
if (!show) return null;

return(
<div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[99999999]">
<div className="p-6 rounded-2xl">

<div className="flex items-center justify-center p-2">
  <HashLoader  color="#B52D0F" size={60} />
</div>

</div>
</div>
)
}