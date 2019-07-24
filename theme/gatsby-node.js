const crypto = require(`crypto`)


exports.createPages = ({ actions, reporter }) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/pages/index.js")
  })
}


exports.sourceNodes = ({ actions: { createTypes, createNode } }, {
  // SEO
  title = "Minimalist Portfolio Gatsby Theme",
  description = "Hi, my name is Filipe Santos Correa. I\'m a Front-End Engineer from Karlsruhe - Germany.",
  siteUrl = "https://filipesantoscorrea.com",
  appName = "Filipe Santos Correa", // Progressive Web App Name

  // Content
  headline = "Filipe Santos Correa",
  subHeadline = "I'm a <strong>Front-End</strong> Engineer.<br/> I <strong>love</strong> to create new things everyday.",
  socialList = [
    {
      icon: 'FaGithub',
      url: 'https://github.com/Safi1012',
      ariaLabel: 'Link to my GitHub profile',
    },
    {
      icon: 'FaTwitter',
      url: 'https://twitter.com/safi1012',
      ariaLabel: 'Link to my Twitter profile',
    },
    {
      icon: 'FaLinkedin',
      url: 'https://www.linkedin.com/in/filipe-santoscorrea',
      ariaLabel: 'Link to my LinkedIn profile',
    },
    {
      icon: 'FaDribbble',
      url: 'https://dribbble.com/safi1012',
      ariaLabel: 'Link to my Dribbble profile',
    }
  ]
}) => {
  createTypes(`
    type MinimalistConfig implements Node {
      title: String!
      description: String!
      siteUrl: String!
      appName: String!
      headline: String!
      subHeadline: String!
      socialList: [Social!]!
    }

    type Social {
      icon: String
      iconSet: String
      url: String
      ariaLabel: String
    }
  `)

  const minimalistConfig = {
    title,
    description,
    siteUrl,
    appName,
    headline,
    subHeadline,
    socialList
  }

  createNode({
    ...minimalistConfig,
    id: `gatsby-theme-minimalist-config`,
    parent: null,
    children: [],
    internal: {
      type: `MinimalistConfig`,
      contentDigest: crypto
        .createHash(`md5`)
        .update(JSON.stringify(minimalistConfig))
        .digest(`hex`),
      content: JSON.stringify(minimalistConfig),
      description: `Minimalist Theme Config`,
    },
  })
}
