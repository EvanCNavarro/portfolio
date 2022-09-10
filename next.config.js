module.exports = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1Dgg9OMvc4pcLUGiqezzTi148dk9iE9GX/view",
        permanent: true,
      },
    ];
  },
};
