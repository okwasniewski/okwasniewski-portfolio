import React from "react"

const SingleTestimonial = ({ name, company, testimonial, identificator }) => {
  return (
    <div id={`card-${identificator}`} className="single-testimonial">
      <p>{testimonial}</p>
      <h2>{name}</h2>
      <h3>{company}</h3>
    </div>
  )
}

export default SingleTestimonial
