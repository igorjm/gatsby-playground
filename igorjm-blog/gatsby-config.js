module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `igorjm blog`,
    author: `Igor Melo`,
    description: `A collection of my thoughts and writings.`,
    siteUrl: `http://igorjm-blog.surge.sh/`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/igoorjm`,
      },
      {
        name: `github`,
        url: `https://github.com/igorjm`,
      },
      {
        name: `linkedin`,
        url: `https://linkedin.com/in/igorjm`
      },
    ],
  },
}
