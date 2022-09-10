export default function Resume() {
  return <></>;
}

export async function getStaticProps() {
  return {
    redirect: {
      permanent: true,
      destination:
        "https://drive.google.com/file/d/1Dgg9OMvc4pcLUGiqezzTi148dk9iE9GX/view",
    },
  };
}

// export async function getStaticProps() {
//   const resumeUrl = getResumeURL(); // Fetches the resume url from somewhere
//   return {
//     redirect: {
//       permanent: true,
//       destination: resumeUrl,
//     },
//     revalidate: 60, // Re-run the fetching function for the dynamic link every minute
//   };
// }