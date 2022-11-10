require('dotenv').config();

const path = require('path');

const { PATH_PREFIX = '/design' } = process.env;

module.exports = {
  pathPrefix: PATH_PREFIX,
  siteMetadata: {
    title: 'IBM Design',
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IBM Design`,
        short_name: `IBM Design`,
        start_url: `/`,
        background_color: `#171717`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/content/global/images/home-icon.png`, // This path is relative to the root of the site.
        include_favicon: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-smartypants`,
          `gatsby-remark-component`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1600,
              linkImagesToOriginal: false,
              backgroundColor: 'transparent',
              quality: 75,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [path.resolve(__dirname, 'node_modules')],
        importer: (url, prev, done) => {
          done({
            file: !/import-once(\.scss)?$/.test(url)
              ? url
              : path.resolve(__dirname, 'src/styles/import-once'),
          });
        },
      },
    },
    {
      resolve: 'gatsby-plugin-fathom',
      options: {
        siteId: 'HUILTLQR',
      },
    },
    'gatsby-plugin-remove-serviceworker',
    'gatsby-plugin-meta-redirect', //this neeeds to stay as the last item
  ],
};
