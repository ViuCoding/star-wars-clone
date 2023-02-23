import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className='content'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
