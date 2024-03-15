import { useGSAP } from "@gsap/react";
import Header from "./components/Header";
import Loader from "./components/templets/Loader";
import Hero from "./components/hero/Hero";
import Container from "./components/templets/Container";
import gsap from "gsap";
import Intro from "./components/intro/Intro";
import Audio from "./components/audio/Audio";
import LocomotiveScroll from "locomotive-scroll";
import PinSec from "./components/pin_sec/PinSec";
import Historical from "./components/Historical";
import Video from "./components/video/Video";
import Author from "./components/Author";
import Initiative from "./components/Initiative";
import Footer from "./components/Footer";

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
    tl.from("nav", {
      y: "-100",
      duration: 0.5,
    });
    tl.from(".hero__top-heading h1", {
      y: 110,
      duration: 0.6,
      stagger: 0.2,
    });
    tl.from(".hero__img-overlay", {
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div className=" bg-primary text-white font-sans px-2">
      <Loader />
      <Container className={`container`}>
        <Header />
        <Hero />
        <Intro />
        <Audio />
        <PinSec />
        <Historical />
        <Video />
        <Author />
        <Initiative />
        <Footer />
      </Container>
    </div>
  );
}
