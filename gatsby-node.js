const path = require("path")

exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.frontmatter.path
    actions.createPage({
      path: `blog/${slug}`,
      component: require.resolve(`./src/templates/blog.js`),
      context: { slug: slug },
    })
  })
}
