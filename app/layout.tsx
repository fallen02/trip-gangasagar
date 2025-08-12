import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
    <Header />
      <main className="font-ubuntu">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
