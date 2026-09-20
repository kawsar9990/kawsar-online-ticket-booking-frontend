import type { Metadata } from "next";
import HomePromotion from "./HomePage";

export const metadata : Metadata = {
  title: 'Promotions | GoKawsar',
  description: 'GoKawsar – simplifying travel across Bangladesh with smart ticket booking and destination guides. Discover buses, trains, and local attractions in one place for a faster, easier, and more enjoyable journey.',
};

export default function page(){

return(
<div>
<HomePromotion />
</div>
)
}