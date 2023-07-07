import { SiteConfig } from "./types";

const config: SiteConfig = {
  // Website configuration
  website: {
    title: "Diablo 4 Tips & Tricks", // Homepage title
    titleShort: "D4 Tips", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation
    name: "Diablo 4 Tips & Tricks", // Website name used for homescreen (PWA) and SEO
    description: "Conquer the battlefield in Diablo 4 with cutting edge tactics, only available at diablo4.tips",
    language: "en", // Sets the global HTML lang attribute
    logoUrl: "/logos/logo-256.png", // Logo used for SEO
    url: "https://diablo4.tips", // Domain of your website without the pathPrefix
    rss: "", // Path to the RSS file
    rssTitle: "", // Title of the RSS feed
    googleAnalyticsId: "G-EN4T1N92FB", // GA tracking ID
    copyright: "© Copyright 2023", // Copyright string for the footer of the website and RSS feed.
    themeColor: "#990000", // Used for setting manifest and progress theme colors.
    backgroundColor: "#333333", // Used for setting manifest background color.
  },

  user: undefined,

  // Organization information used for SEO
  organization: undefined,

  // Gatsby Configuration
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.

  contentDir: undefined, // Directory for MDX posts
  assetDir: undefined, // Asset directory

  embeddedImageWidth: 768, // MDX embedded image width. Used by gatsby-plugin-image for optimization
  embeddedVideoWidth: 920, // MDX embedded video width in pixels

  iconPath: undefined, // Icon used for manifest icon creation.
  iconList: [], // Icons used for the web manifest. Can be used to override iconPath for a more pixel perfect control.
  iconCachePaths: undefined, // Glob pattern path for the icons to be cached by the gatsby-plugin-offline

  basePath: undefined, // Base path for mounting pages. Allows for multiple themes to be used in a single website.
};

export default config;
