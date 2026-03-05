import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


export default function MainLayout() {
  return(
    <>
    <Navbar />
    <main className="pt-20 min-h-screen">
      <Outlet/>
    </main>
    </>
  );
};