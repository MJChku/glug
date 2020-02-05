module.exports = {
  siteMetadata: {
    title: `Jiacheng's Story`,
    description: `story telling`,
    author: `ma jiacheng`,
    siteUrl: 'https://jiacma.netlify.com',
    events: {
      title: 'MJC',
      siteUrl: 'https://jiacma.netlify.com/events',
    },
    team: {
      title: 'MJC',
      siteUrl: 'https://jiacma.netlify.com/team',
    },
    blog: {
      title: 'MJC',
      siteUrl: 'https://jiacma.netlify.com/blog',
    },
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
        name: `blog`,
        path: `${__dirname}/src/data/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/src/data/events`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `members`,
        path: `${__dirname}/src/data/members`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        plugins: [
          `gatsby-remark-reading-time`,
          `gatsby-remark-copy-linked-files`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1080,
            },
          },
          // ...
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Glug-Infinite`,
        short_name: `Glug-Infinite`,
        start_url: `/`,
        background_color: `#1B1E46`,
        theme_color: `#1B1E46`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-no-sourcemaps",
  ],
}
