module.exports = {
  pathPrefix: '/chase-portfolio',
  siteMetadata: {
    title: `Chase McCain`,
    description: `Chase McCain UI/UX Portfolio`,
    author: `Chase McCain`,
    email: 'chase.mccain3@gmail.com',
    linkedin: 'https://www.linkedin.com/in/chase-mccain',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
}
