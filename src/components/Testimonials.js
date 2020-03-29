import React, { useState } from "react"
import SingleTestimonial from "./SingleTestimonial"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
// import SliderSimple from "./slider"

const Tesimonials = () => {
  const [index, setIndex] = useState(0)
  const data = [
    {
      name: "Marek Więckowski",
      company: "Firma 1",
      id: 0,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit, urna eu tincidunt tempus, neque mauris ullamcorper risus, euismod tincidunt augue lacus eget dui. Quisque id tortor magna. Nunc vitae lectus metus. Maecenas ut interdum augue.",
    },
    {
      name: "Agata Marynarska",
      company: "Firma 2",
      id: 1,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit, urna eu tincidunt tempus, neque mauris ullamcorper risus, euismod tincidunt augue lacus eget dui. Quisque id tortor magna. Nunc vitae lectus metus. Maecenas ut interdum augue.",
    },
    {
      name: "Jakub Kowalski",
      company: "Firma 3",
      id: 2,
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit, urna eu tincidunt tempus, neque mauris ullamcorper risus, euismod tincidunt augue lacus eget dui. Quisque id tortor magna. Nunc vitae lectus metus. Maecenas ut interdum augue.",
    },
  ]

  // const MyInterval = setInterval(() => {
  //   let random = Math.floor(Math.random() * 3)
  //   if (random !== index) {
  //     setIndex(random)
  //   } else {
  //     console.log()
  //   }
  // }, 5000)

  const nextButtonHandler = () => {
    if (index < 2) {
      setIndex(index + 1)
    }
  }
  const prevButtonHandler = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <div className="testimonials">
      <p className="testimonials__smallHeading">Referencje</p>
      <h1>
        Opinie zadowolonych <br></br> klientów
      </h1>
      <div className={`testimonials__slider active-slide-${index}`}>
        <div
          className="testimonials__slider-wrapper"
          style={{ transform: `translateX(-${(index * 100) / data.length}%)` }}
        >
          {data.map(testimonal => {
            return (
              <SingleTestimonial
                key={testimonal.id}
                name={testimonal.name}
                identificator={testimonal.id}
                company={testimonal.company}
                testimonial={testimonal.testimonial}
              />
            )
          })}
        </div>
        <FaArrowLeft
          onClick={prevButtonHandler}
          className="testimonials__left"
        />
        <FaArrowRight
          onClick={nextButtonHandler}
          className="testimonials__right"
        />
      </div>
    </div>
  )
}

export default Tesimonials
