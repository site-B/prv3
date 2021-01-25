module.exports = {
  siteMetadata: {
    title: `procedural`,
    description: `Pet project of a blog. Made with graphql, gatsby, and React. Expect many surprises.`,
    author: `Víctor Balaguera`,
    image: './src/images/main.jpg',
    twitterUsername: "@balaguera",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `procedural`,
        short_name: `procedural`,
        start_url: `/`,
        background_color: `#663399`, // PLACEHOLDER
        theme_color: `#663399`, // PLACEHOLDER
        display: `minimal-ui`, // PLACEHOLDER
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
