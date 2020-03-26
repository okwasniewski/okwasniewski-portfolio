import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"

function Portfolio() {
  const data = useStaticQuery(graphql`
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
  return (
    <div id="portfolio-scroll" className="portfolio">
      <p className="portfolio__smallHeading">Portfolio</p>
      <h1>Moje ostatnie prace</h1>
      <div className="portfolio__section">
        {data.portfolio.portfolios.slice(0, 6).map(portfolio => {
          return (
            <div
              className="portfolio__item"
              style={{ backgroundImage: `url(${portfolio.image.url})` }}
            >
              <div className="portfolio__title">
                <h3 className="portfolio__name">{portfolio.name}</h3>{" "}
                <AniLink
                  className="portfolio__redirect"
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
  )
}

export default Portfolio
