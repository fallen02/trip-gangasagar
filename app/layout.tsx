import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Outlet } from "react-router";
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function RootLayout() {
  return (
    <>
    <Header />
    <FloatingWhatsApp accountName="Gangasagar Travels & Hotel" phoneNumber="+916297368883" darkMode messageDelay={10}  buttonClassName=""/>
      <main className="font-ubuntu">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
