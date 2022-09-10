export default function Links() {
  return <></>;
}

export async function getStaticProps() {
  return {
    redirect: {
      permanent: true,
      destination:
        "https://y.at/%F0%9F%91%8B%F0%9F%A4%93%F0%9F%92%BB",
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