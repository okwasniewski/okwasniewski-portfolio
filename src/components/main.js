import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Lottie from "react-lottie"
import AnimationData from "../animations/group-working.json"
function Main() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: AnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
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
        <Lottie options={defaultOptions} width={500} height={500} />
      </div>
    </div>
  )
}

export default Main
