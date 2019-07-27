module.exports = {
  siteMetadata: {
    siteUrl: "https://..." // only set to enable the generation of a sitemap with 'gatsby-plugin-sitemap'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `600`]
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }

            minimalistConfig(id: {eq: "gatsby-theme-minimalist-config"}) {
              title,
              description,
              siteUrl,
              appName
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, minimalistConfig, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: minimalistConfig.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
        })
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ]
}
