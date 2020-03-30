import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaBars } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  const BurgerHandler = () => {
    let BurgerItem = document.querySelector(".burger")

    BurgerItem.classList.toggle("active")
  }
  const Burger = () => {
    return (
      <div className="burger">
        <ul className="burger__nav">
          <li>
            <AniLink cover bg="#2191e3" onClick={BurgerHandler} to="/">
              Home
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              bg="#2191e3"
              onClick={BurgerHandler}
              to="/#aboutme-scroll"
            >
              O mnie
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              bg="#2191e3"
              onClick={BurgerHandler}
              to="/#skills-scroll"
            >
              Technologie
            </AniLink>
          </li>
          <li>
            <AniLink
              cover
              bg="#2191e3"
              onClick={BurgerHandler}
              to="/#portfolio-scroll"
            >
              Portfolio
            </AniLink>
          </li>
          <li>
            <AniLink cover bg="#2191e3" onClick={BurgerHandler} to="/kontakt">
              Kontakt
            </AniLink>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <header className="header">
      <h1 className="header__logo">
        <AniLink cover bg="#2191e3" to="/">
          okwasniewski
        </AniLink>
      </h1>
      <ul className="header__nav">
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
      <span className={"header__burger"}>
        {" "}
        <FaBars onClick={BurgerHandler} />
      </span>
      {Burger()}
    </header>
  )
}

export default Header
