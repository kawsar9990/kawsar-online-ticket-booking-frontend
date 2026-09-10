'use client';

import Image from "next/image";
import LatestBlog from "./latestBlog";
import TreadingBlog from "./treadingBlog";
import AllBlog from "./allBlog";

export default function Blog(){


return(
<div className="">

<div className="flex flex-col gap-5">

<div>
<Image 
src={`https://res.cloudinary.com/dkmzakgx2/image/upload/v1788679144/Gemini_Generated_Image_e7p850e7p850e7p8_t9euek.jpg`}
alt="homeimg"
width={550}
height={100}
className="w-full xl:h-screen"/>
</div>


<div className="max-w-7xl mx-auto p-7">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<LatestBlog />
</div>

<div className="lg:col-span-1">
<TreadingBlog />
</div>

</div>
</div>


<div className="max-w-7xl mx-auto p-7 justify-start">
    <AllBlog />
</div>


</div>
</div>
)
}