import Head from "next/head";
import { useRouter } from "next/router";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: `Evan C. Navarro — Portfolio // Jr. Product Designer in Orlando, FL.`,
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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

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

      <main className="light:bg-white w-full">
        <div>{children}</div>
      </main>
    </div>
  );
}
