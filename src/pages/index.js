import ContainerBlock from "/src/components/0_ContainerBlock";
import Navbar from "/src/components/1A_Navbar";
import Banner from "/src/components/1B_Banner";
// import ProgessBar from "/src/components/1C_ProgressBar";
import Hero from "/src/components/2_Hero";
import About from "/src/components/3_About";
import Projects from "/src/components/4_Projects";
import Contact from "/src/components/5_Contact";
import SiteCredits from "/src/components/6A_SiteCredits";
import Footer from "/src/components/6B_Footer";

export default function Home() {
  return (
    <ContainerBlock>
      <Navbar />
      <Banner />
      {/* <ProgessBar /> */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <SiteCredits />
      <Footer />
    </ContainerBlock>
  );
}
