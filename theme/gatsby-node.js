exports.createPages = ({ actions, reporter }) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/pages/index.js")
  })

  actions.createPage({
    path: "/terms",
    component: require.resolve("./src/pages/terms.js")
  })

  actions.createPage({
    path: "/privacy",
    component: require.resolve("./src/pages/privacy.js")
  })
}
