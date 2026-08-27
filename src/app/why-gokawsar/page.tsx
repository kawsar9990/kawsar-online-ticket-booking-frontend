import WhyUs from "./gokawsarcountup";


export const metadata = {
  title: 'Why Choose Us | GoKawsar',
  description: 'Discover why thousands of travelers trust GoKawsar for real-time ticketing, 24/7 support, and destination guides.',
};

export default function page() {
  return (
    <main className="min-h-screen bg-slate-50">
      <WhyUs />
    </main>
  );
}