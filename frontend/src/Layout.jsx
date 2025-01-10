import Header from "./components/Header"
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}