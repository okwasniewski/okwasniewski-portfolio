import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaFacebook, FaGithub, FaFacebookF, FaEnvelope } from "react-icons/fa"

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
              <AniLink cover bg="#2191e3" to="/kontakt">
                Kontakt
              </AniLink>
            </li>
          </ul>
        </div>
        <div className="footer__linksSection">
          <h3>Social media</h3>
          <ul>
            <li>
              <a href="http://github.com/okwasniewski/">
                <FaGithub /> Github
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/okwasniewski/">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href="mailto:oskarkwasniewski@icloud.com">
                <FaEnvelope /> Napisz maila
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© Copyright 2020 - Oskar Kwaśniewski</p>
      </div>
    </div>
  )
}

export default Footer
