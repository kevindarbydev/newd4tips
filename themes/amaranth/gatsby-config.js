module.exports = {
  siteMetadata: {
    title: "Diablo 4 Tips & Tricks",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/icons/redDJPEG.jpeg`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-theme-advanced",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
  ],
};
