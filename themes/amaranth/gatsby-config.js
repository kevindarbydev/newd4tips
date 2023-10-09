module.exports = {
  siteMetadata: {
    title: "Diablo 4 Tips",
    siteUrl: "https://diablo4.tips",
    description: "Tips & Tricks to excel in Diablo 4",
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
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        enableIdentityWidget: false,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-theme-advanced",
    },    
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "fonts",
        path: `${__dirname}\\static\\fonts`,
      },
    },
  ],
};
