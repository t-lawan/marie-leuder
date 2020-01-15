/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // const result = await graphql(`
  //   {
  //     allContentfulPage {
  //       edges {
  //         node {
  //           contentful_id
  //           title
  //           slug
  //           template
  //           content {
  //             json
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (result.errors) {
  //   throw new Error(result.errors)
  // }
  // const { allContentfulPage } = result.data

  // const defaultTemplate = path.resolve(`./src/templates/default.js`)

  // allContentfulPage.edges.forEach(edge => {
  //   let template
  //   switch (edge.node.template) {
  //     case "default":
  //       template = defaultTemplate
  //       break
  //     default:
  //       template = defaultTemplate
  //       break;
  //   }

  //   createPage({
  //     path: edge.node.slug,
  //     component: slash(template),
  //     context: edge.node,
  //   })
  // })
}
