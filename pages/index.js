import Head from "next/head";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import RecentProjects from "../components/RecentProjects";
import WorkOverview from "../components/WorkOverview";
import ContactInformation from "../components/ContactInformation";
import SiteCredits from "../components/SiteCredits";
import { userData } from "../constants/data";

// import LatestCode from "../components/LatestCode";
// import getLatestRepos from "@lib/getLatestRepos";
// import { Navbar } from "../components/Navbar";

export default function Home() {
  return (
    <ContainerBlock
      title="Evan C. Navarro's Portfolio"
      description="The personal portfolio website for Evan C. Navarro; showcasing all projects involved with, work experience, contact information, and downloadable resume."
    >
      <div className="flex justify-center">
        <Hero />
      </div>
      <div className="flex justify-center">
        <Intro />
      </div>
      <RecentProjects />
      <WorkOverview />
      <ContactInformation />
      <SiteCredits />
    </ContainerBlock>
  );
}
