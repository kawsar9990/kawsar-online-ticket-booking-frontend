'use client';

import BannerAd from "@/components/sliders/BannerAd";
import { bannerData } from "@/db/promotionsdata";
import PromotionsTab from "./PromotionsTab";

export default function HomePromotion(){


return(
<div className="" style={{userSelect: "none"}}>
<div className="lg:pt-20 px-3 py-3 md:px-5 md:py-5">
    <BannerAd slides={bannerData} />
</div>

<div className="pt-7 md:px-5 md:py-5">

<div>
<PromotionsTab /> 
</div>

</div>
</div>
)
}