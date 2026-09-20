import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import PromotionCard, { Promotion } from './PromotionCard';

const promotionsData: Promotion[] = [
  {
    id: 1,
    title: "Bangladeshs first ever lifestyle cards, Stellar Cards",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789229113/Gemini_Generated_Image_n7ckrrn7ckrrn7ck_lintky.jpg",
    category: "All Offers",
    link: "/promotions/Stellar-Card",
  },
  {
    id: 2,
    title: "Every Saturday: Extra 8% OFF + FREE Delivery",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209513/1789010334_Super-Deal-Saturday-home-page-Thumbnail_ayuj1p.jpg",
    category: "Flight",
    link: "/promotions/Super-deal-Saturday-shopping",
  },
  {
    id: 3,
    title: "Special rate on Domestic Hotels & Resorts with bKash",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209513/1776587042_Homepage_thumbnail_ciaxae.png",
    category: "Flight",
    link: "/promotions/Hotel-bkash",
  },
  {
    id: 4,
    title: "Exclusive Air Fare Deals for International Students",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209513/Student-fare-home-page-thumbnail_1_igv6bn.png",
    category: "Value-added Service",
    link: "/promotions/Exclusive-Student-Fare",
  },
  {
    id: 5,
    title: "Get the special rate on flight bookings",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209512/1777362503_Domestic_flight_KV_April_Update_2026_Home_Thumb_jvr68b.png",
    category: "Flight",
    link: "/promotions/Flight-Campaign",
  },
  {
    id: 6,
    title: "Weekend Getaway",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209513/B2C_Homepage_Thumbnail_zzw8tt.jpg",
    category: "Flight",
    link: "/promotions/Inbound-Tour-Package",
  },
  {
    id: 7,
    title: "0% EMI for 6 Months with exclusive...",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209512/1763272903_Meghna_bank_home_page_thumbnail_ar3rjc.png",
    category: "Hotel",
    link: "/promotions/Meghna-Bank-EMI-Offer",
  },
  {
    id: 8,
    title: "Elevate Your Experience with Flight Add-ons",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209512/1776230648_TripAdd-Web-home-thumb2026_ahhfyh.png",
    category: "Hotel",
    link: "/promotions/Flight-AddOns",
  },
  {
    id: 9,
    title: "Exclusive offer on Domestic Hotels & Resorts for Banglalink Orange Club Members",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209512/1783917819_updated_banglalink_logo_78__hotel_resort_home_page_thumbnail_evevl6.png",
    category: "Holidays",
    link: "/promotions/STAYORANGE",
  },
  {
    id: 10,
    title: "Best rate on the base fare of domestic flights with Nagad",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209512/1777788082_Flight_Promotion_with_Nagad_Home_Thumb_j3ol9i.png",
    category: "Value-added Service",
    link: "/promotions/nagad-domestics",
  },
];

const categories = ["All Offers", "Flight", "Hotel", "Value-added Service", "Holidays"];

export default function PromotionsTab() {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };


  const selectedCategory = categories[activeTab];
  const filteredPromotions = selectedCategory === "All Offers"
    ? promotionsData
    : promotionsData.filter((item) => item.category === selectedCategory);

return(
<div className="w-full max-w-6xl mx-auto p-4 md:p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Promotions</h2>


      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          aria-label="promotion categories"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              color: '#666',
              px: 2,
            },
            '& .Mui-selected': {
              color: '#1976d2 !important',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#1976d2',
              height: 3,
            },
          }}
        >
          {categories.map((cat, index) => (
            <Tab key={index} label={cat} />
          ))}
        </Tabs>
      </Box>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {filteredPromotions.map((item) => (
          <PromotionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
);
}