import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import AnimatedGif from "../animations/group.gif"

function Main() {
  return (
    <div className="main">
      <div data-aos="fade-right">
        <div className="main__left" delay="50">
          <h1>
            Pomagam małym <br></br>firmom zwiększać <br></br>sprzedaż
          </h1>
          <h3> Tworząc przejrzyste strony internetowe </h3>

          <AniLink
            cover
            bg="#2191e3"
            className="button"
            to="/#portfolio-scroll"
          >
            Dowiedz się więcej
          </AniLink>
        </div>
      </div>
      <div className="main__right">
        <img src={AnimatedGif} alt="Help people grow!" />
      </div>
    </div>
  )
}

export default Main
