import ChapterObserver from "@/components/ChapterObserver";
import SmoothScroll from "@/components/SmoothScroll";
import Fx from "@/components/Fx";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Manifesto from "@/components/Manifesto";
import Services from "@/components/Services";
import Ecosystem from "@/components/Ecosystem";
import Agents from "@/components/Agents";
import Workflow from "@/components/Workflow";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import Why from "@/components/Why";
import StackGrid from "@/components/StackGrid";
import Industries from "@/components/Industries";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ChapterObserver />
      <SmoothScroll />
      <Fx />
      <Nav />
      <main id="main">
        <Hero />
        <ProofStrip />
        <Manifesto />
        <Services />
        <Ecosystem />
        <Agents />
        <Workflow />
        <Cases />
        <Process />
        <Why />
        <StackGrid />
        <Industries />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
