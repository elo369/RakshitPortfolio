import Image from "next/image";
import Hero from "../../components/Hero";
import Experience from "../../components/Experience";
import Projects from "../../components/Projects";
import Others from "../../components/Others";
import { FloatingDockDemo } from "../../components/Navbar";

export default function Home() {
  return (
    <div className="bg-black">
      <Hero/>
      <Experience/>
      <Projects/>
      <div className="relative z-20 ">
      <FloatingDockDemo/>
      </div>
      <Others/>
    </div>
  );
}
