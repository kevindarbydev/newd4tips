module.exports = {
  siteMetadata: {
    title: "Diablo 4 Tips",
    siteUrl: "https://diablo4.tips",    
    description: "Tips & Tricks to Excel in Diablo 4",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",   
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
