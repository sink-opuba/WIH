module.exports = {
  siteMetadata: {
    title: `Warri Innovation Hub`,
    description: `An innovation hub in Warri catalyzing innovations and technologies with high growth potentials built by Africans to solve local or global problems.`,
    author: `@WaffiiHub`,
    siteUrl: `https://warriinnovationhub.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `warri-innovation-hub`,
        short_name: `waffiiHub`,
        start_url: `/`,
        background_color: `#1a4faa`,
        theme_color: `#1a4faa`,
        display: `minimal-ui`,
        icon: `src/images/waffiihub-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
