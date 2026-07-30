import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "../style/globals.css";
import ClientLayout from "@/components/layout/client/ClientLayout";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Online Ticket Booking | gokawsar",
  applicationName: "GoKawsar",
  description: "GoKawsar is a modern online ticket booking platform in Bangladesh. Book bus, train, and flight tickets easily with a smooth user experience.",
  keywords: ["online ticket booking", "bus tickets", "train tickets", "flight tickets", "Bangladesh travel", "GoKawsar", "gokawsar", "gokawser", "BD", "Go", "Kawsar", "kawsar", "go", "website", "project", "netlify", "Vercel"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} font-sans h-full antialiased`}
     suppressHydrationWarning
     >
      <body className="min-h-full flex flex-col" cz-shortcut-listen="true"
      suppressHydrationWarning={true}>
      <ClientLayout>
        {children}
      </ClientLayout>
      </body>
    </html>
  );
}
