import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Outlet, useLocation } from "react-router";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { useEffect } from "react";
import TagManager from 'react-gtm-module'

export default function RootLayout() {
  const tagManagerArgs = {
    gtmId: 'G-JDEDNS1RVY',
     dataLayer: {
      js: new Date(),
      config: 'G-JDEDNS1RVY'
     }
  }
  TagManager.initialize(tagManagerArgs)
  // const location = useLocation()
  // useEffect(() => {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());
  //   gtag('config', 'G-JDEDNS1RVY');
  // }, [location])
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
