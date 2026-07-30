'use client';

import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

export default function Header(){

return(
<div className="z-[1999999]" style={{userSelect: "none"}}>

<div className="block lg:hidden">
<MobileHeader />
</div>

<div className="hidden lg:block">
<DesktopHeader />
</div>

</div>
)
}