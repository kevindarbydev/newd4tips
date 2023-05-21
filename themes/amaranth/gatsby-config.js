module.exports = (userConfig) => ({
  plugins: [
    {
      resolve: "gatsby-theme-advanced",
      options: userConfig,
    },
    [`gatsby-plugin-netlify`],
  ],
});
