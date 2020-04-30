import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function AboutMe() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "okwasniewski.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 800, maxHeight: 800, quality: 90) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div id="aboutme-scroll" className="aboutme">
      <p className="aboutme__smallHeading">Kilka słów o mnie</p>
      <h1>
        Nazywam się Oskar Kwaśniewski <br></br> i zajmuje się tworzeniem stron
        od 2 lat.{" "}
      </h1>
      <div className="aboutme__section">
        <div className="aboutme__description">
          <p>
            Jestem studentem Wydziału Informatyki na Zachodniopomorskim
            Uniwersytecie Technologicznym. Tworzę strony dla małych firm i
            przedsiębiorców. Mam doświadczenie w pracy z klientami i potrafię z
            nimi rozmawiać. Programowanie to coś co sprawia mi dużą frajdę.
            Lubie rozwiązywać problemy, które przekładają się na tworzenie
            ciekwych i pomysłowych stron dla firm ze wszystkich branż. W wolnych
            chilach uprawiam sport i jeżdzę na desce.{" "}
          </p>
        </div>
        <div className="aboutme__image">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
