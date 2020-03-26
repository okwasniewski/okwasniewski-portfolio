import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function AboutMe() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "okwansiewski.jpg" }) {
        id
        childImageSharp {
          id
          fluid {
            aspectRatio
            base64
            src
            srcSet
            sizes
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu
            turpis pellentesque, pulvinar arcu et, iaculis magna. Sed cursus
            gravida dolor id mattis. Praesent quis iaculis mi. Aenean odio enim,
            porttitor quis sollicitudin in, pellentesque finibus felis. Integer
            porttitor nibh nulla, vel dapibus arcu pharetra eu. Cras ut porta
            justo.Praesent quis iaculis mi. Aenean odio enim, porttitor quis
            sollicitudin in, pellentesque finibus felis. Integer porttitor nibh
            nulla, vel dapibus arcu pharetra eu. Cras ut porta justo.Praesent
            quis iaculis mi. Aenean odio enim, porttitor quis sollicitudin in,
            pellentesque finibus felis. Integer porttitor nibh nulla, vel
            dapibus arcu pharetra eu. Cras ut porta justo.{" "}
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
