import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UnderConstruction from "./UnderConstruction";


export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: `Evan C. Navarro's Portfolio`,
    description: `The personal portfolio website for Evan C. Navarro; showcasing all projects involved with, work experience, contact information, and downloadable resume.`,
    image: `/avatar.png`,
    type: `website`,
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://ecn.dev${router.asPath}`} />
        <link rel="canonical" href={`https://ecn.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Evan C. Navarro" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EvanCNavarro" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      {/* <main className="dark:bg-gray-800 w-full"> */}
      <main className="light:bg-white w-full">
        <Navbar />
        <UnderConstruction />
        <div
          className="
            min-h-screen mx-[6.25%]
          "
        >
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
