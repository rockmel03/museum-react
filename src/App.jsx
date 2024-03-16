import { useGSAP } from "@gsap/react";
import Loader from "./components/templets/Loader";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import Home from "./pages/Home";

export default function App() {
  const scroll = new LocomotiveScroll();

  const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(".loader", {
      duration: 1,
      delay: 2,
      display: "none",
      y: "-100%",
      ease: "power1.inOut",
    });
  });

  return (
    <div className=" bg-primary text-white font-sans px-2">
      <Loader />
      <Home />
    </div>
  );
}
