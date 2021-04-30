require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  pathPrefix: "/personal-portfolio",
  siteMetadata: {
    title: `Ryan Hong`,
    description: `Personal portfolio utilizing Gatsby Lekoarts theme`,
    author: `@ryan-hong`,
    siteTitle: `Ryan Hong`,
    siteTitleAlt: `Ryan Hong`,
    siteImage: `/logo.png`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Work Experience`,
            slug: `/experience`,
          },
          {
            title: `Projects`,
            slug: `/projects`,
          },
        ],
        externalLinks: [
          {
            name: `GitHub`,
            url: `https://github.com/ryan-hong`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/ryan-wai-hong/`,
          },
          {
            name: `Resume`,
            url: `https://drive.google.com/file/d/145MIltYHwr_nGwXYs3G00BMs5YHV2Gay/view?usp=sharing`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/logo.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/logo.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
