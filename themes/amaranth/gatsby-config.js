module.exports = (userConfig) => ({
  plugins: [
    {
      resolve: "gatsby-theme-advanced",
      options: userConfig,
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/icons/redDJPEG.jpeg`,
      },
    },
    "gatsby-plugin-sitemap",
  ],
});
