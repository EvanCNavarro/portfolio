import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import RecentProjects from "../components/RecentProjects";
import WorkOverview from "../components/WorkOverview";
import ContactInformation from "../components/ContactInformation";
import SiteCredits from "../components/SiteCredits";

export default function Home() {
  return (
    <ContainerBlock>
      <Hero />
      <RecentProjects />
      <WorkOverview />
      <ContactInformation />
      <SiteCredits />
    </ContainerBlock>
  );
}
