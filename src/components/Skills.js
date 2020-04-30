import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaWordpress, FaReact, FaSass, FaJs, FaGit } from "react-icons/fa"

function Skills() {
  return (
    <div id="skills-scroll" className="skills">
      <div className="skills__wrapper">
        <p className="skills__smallHeading">Umiejętności</p>
        <h1>
          Korzystam z najnowszych <br></br> technologii
        </h1>
        <div className="skills__section">
          <div className="skills__element">
            <div className="skills__circle">
              <FaReact />
            </div>
            <h3>React JS</h3>
          </div>
          <div className="skills__element">
            <div className="skills__circle">
              <FaSass />
            </div>
            <h3>SaSS</h3>
          </div>
          <div className="skills__element">
            <div className="skills__circle">
              <FaWordpress />
            </div>
            <h3>Wordpress</h3>
          </div>
          <div className="skills__element">
            <div className="skills__circle">
              <FaJs />
            </div>
            <h3>Javascript</h3>
          </div>
          <div className="skills__element">
            <div className="skills__circle">
              <FaGit />
            </div>
            <h3>Git</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
