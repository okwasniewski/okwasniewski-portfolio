import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaFacebook, FaGithub, FaFacebookF } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__section">
        <div className="footer__logoSection">
          <h1>
            <AniLink cover bg="#2191e3" to="/">
              okwasniewski
            </AniLink>
          </h1>
        </div>
        <div className="footer__navSection">
          <h3>Na skróty</h3>
          <ul className="footer__nav">
            <li>
              <AniLink cover bg="#2191e3" to="/">
                Home
              </AniLink>
            </li>
            <li>
              <AniLink cover bg="#2191e3" to="/#aboutme-scroll">
                O mnie
              </AniLink>
            </li>
            <li>
              <AniLink cover bg="#2191e3" to="/#skills-scroll">
                Technologie
              </AniLink>
            </li>
            <li>
              <AniLink cover bg="#2191e3" to="/#portfolio-scroll">
                Portfolio
              </AniLink>
            </li>
            <li>
              <AniLink cover bg="#2191e3" to="/">
                Kontakt
              </AniLink>
            </li>
          </ul>
        </div>
        <div className="footer__linksSection">
          <h3>Social media</h3>
          <ul>
            <li>
              <a href="#">
                <FaGithub /> Github
              </a>
            </li>
            <li>
              <a href="#">
                <FaFacebook /> Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright - Oskar Kwaśniewski</p>
      </div>
    </div>
  )
}

export default Footer