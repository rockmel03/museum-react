import { useGSAP } from "@gsap/react";
import Loader from "./components/templets/Loader";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./pages/Home";
import { Cursor } from "./components/Index";

export default function App() {
  const scroll = new LocomotiveScroll();

  return (
    <div className=" bg-primary text-white font-sans px-2">
      <Loader />
      <Cursor />
      <Home />
    </div>
  );
}
