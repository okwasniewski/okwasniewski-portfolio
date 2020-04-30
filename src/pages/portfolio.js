import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"
function Portfolio() {
  const data = useStaticQuery(graphql`
    query {
      portfolio {
        portfolios(orderBy: createdAt_DESC) {
          id
          name
          image {
            url
          }
          description
          url
          slug
          thumbnail {
            url
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Portfolio"
        description="Nazywam się Oskar Kwaśniewski
        i zajmuje się tworzeniem stron od 2 lat.
        Jestem studentem Wydziału Informatyki na Zachodniopomorskim Uniwersytecie Technologicznym. "
      />
      <div className="portfolio">
        <div className="portfolio__header">
          <p>Portfolio</p>
          <h1>Moje ostatnie prace</h1>
        </div>
        <div className="portfolio__all">
          <div className="portfolio__section">
            {data.portfolio.portfolios.map(portfolio => {
              return (
                <div
                  key={portfolio.id}
                  className="portfolio__item"
                  style={{
                    backgroundImage: `url(${portfolio.thumbnail.url})`,
                  }}
                >
                  <div className="portfolio__title">
                    <h3 className="portfolio__name">{portfolio.name}</h3>{" "}
                    <AniLink
                      className="portfolio__redirect button"
                      cover
                      bg="#2191e3"
                      to={`/${portfolio.slug}`}
                    >
                      Zobacz
                    </AniLink>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
