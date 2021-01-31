module.exports = {
  siteMetadata: {
    title: `procedural`,
    description: `Made in Madrid`,
    author: `Víctor Balaguera`,
    image: `/images/logo.png`,
    keywords: `fuckery, fun, balaguera, coding`,
    twitterUsername: "@balaguera",
    siteUrl: "https://elegant-bassi-d0fe18.netlify.app/", //PLACEHOLDER
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/posts`,
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
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
          shortname: `procedural-1`
      },
  },
  ],
}
