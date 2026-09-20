"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function a11yProps(index: number) {
  return {
    id: `hotel-tab-${index}`,
    "aria-controls": `hotel-tabpanel-${index}`,
  };
}

const tabItems = [
  { label: "Overview", sectionId: "overview-section" },
  { label: "Rooms", sectionId: "room-selection-section" },
  { label: "Amenities", sectionId: "amenities-section" },
  { label: "Location", sectionId: "location-section" },
  { label: "Policies", sectionId: "policies-section" },
];

export default function HotelNavigationTabs() {
 
const ALWAYS_ACTIVE_INDEX = 2;

const handleChange = (event: React.SyntheticEvent, newValue: number) => {
   
const targetSectionId = tabItems[newValue].sectionId;
const element = document.getElementById(targetSectionId);

if (element) {
const offset = 90;
const bodyRect = document.body.getBoundingClientRect().top;
const elementRect = element.getBoundingClientRect().top;
const elementPosition = elementRect - bodyRect;
const offsetPosition = elementPosition - offset;

window.scrollTo({
  top: offsetPosition,
  behavior: "smooth",
});
}
};

return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#f8fafc",
        borderBottom: 1,
        borderTop: 1,
        borderColor: "divider",
        position: "sticky",
        top: 0,
        zIndex: 40,
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box sx={{ maxWidth: "1280px", margin: "0 auto", px: 2 }}>
        <Tabs
          value={ALWAYS_ACTIVE_INDEX} 
          onChange={handleChange}
          aria-label="hotel navigation tabs"
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#f59e0b", 
              height: 3,
              borderRadius: "3px 3px 0 0",
            },
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 1000,
              fontSize: "0.875rem",
              color: "#475569",
              paddingY: "14px",
              minWidth: "auto",
              marginRight: "24px",
              "&.Mui-selected": {
                color: "Black", 
              },
              "&:hover": {
                color: "#0f172a",
              },
            },
          }}
        >
          {tabItems.map((tab, index) => (
            <Tab key={index} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}