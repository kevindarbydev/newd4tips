module.exports = {  
  siteMetadata:{
    title: "Diablo 4 Tips & Tricks"
  },
  plugins: [
     "gatsby-plugin-image",
    "gatsby-plugin-sharp",    
    "gatsby-transformer-sharp",
        {
      resolve: "gatsby-theme-advanced",
   
    },
    {
  resolve: 'gatsby-source-filesystem',
  options: {
    name: 'images',
    path: `${__dirname}/static/images`,
  }
  },
  ],
};
