module.exports = {
  siteMetadata: {
    // site info - important for SEO
    title: "Minimalist Portfolio Gatsby Theme",
    description: "Hi, my name is Filipe Santos Correa. I\'m a Front-End Engineer from Karlsruhe - Germany.",
    siteUrl: "https://filipesantoscorrea.com",
    appName: "Filipe Santos Correa", // Progressive Web App Name

    // page content
    headline: "Filipe Santos Correa",
    subheadline: "I'm a <strong>Front-End</strong> Engineer.<br/> I <strong>love</strong> to create new things everyday."
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
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Your full name`,
    //     short_name: `Name`,
    //     start_url: `/`,
    //     background_color: `#ffffff`,
    //     theme_color: `#0873e8`,
    //     display: `standalone`,
    //     icon: `./theme/assets/appicon.png`,
    //     include_favicon: true
    //   },
    // },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: ["/terms", `/privacy`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://your-website.com',
        sitemap: 'https://your-website.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/', disallow: ["/terms", "/privacy"], }]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ]
}
