module.exports = {
  siteMetadata: {
    title: `LUEDER`,
    description: `Marie Lueder is a fashion designer who works as a narrator and sculptor researching men and their mental health through creating garments which work as 'mind-armour' for the wearer and displays the struggle of the reality fiction we live in through the microcosmos she is portraying.`,
    author: `Marie Lueder`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ig6pa91bw1wr`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        //master 
        accessToken: "ODyY86iVfxNO2H1H5tpeuOi7srB8kZp4gLydfp-P8UE",
        environment: 'master',
        //dev
        // accessToken: "NjXAl9Q5Wq8KNJjLzJYWMlmzcd6KP7fKbDruIn2sf20",
        downloadLocal: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/components/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
