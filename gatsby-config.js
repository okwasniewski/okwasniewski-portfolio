module.exports = {
  siteMetadata: {
    title: `Oskar Kwaśniewski`,
    description: `Tworzę strony dla małych firm i przedsiębiorców`,
    author: `@okwasniewski`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "PORTFOLIO",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "portfolio",
        // Url to query from
        url:
          "https://api-eu-central-1.graphcms.com/v2/ck88j55ck06oy01z1dfl00a45/master",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `okwasniewski-portfolio`,
        short_name: `okwasniewski`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
