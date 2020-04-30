/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const PortfolioPageTemplate = path.resolve(
    `src/templates/portfolioPostTemplate.js`
  )
  const PortfolioQuery = await graphql(`
    query {
      portfolio {
        portfolios {
          id
          name
          image {
            url
          }
          description
          url
          slug
        }
      }
    }
  `)
  PortfolioQuery.data.portfolio.portfolios.forEach(portfolio => {
    createPage({
      path: portfolio.slug,
      component: PortfolioPageTemplate,
      context: {
        data: portfolio,
      },
    })
  })
}
