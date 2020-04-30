import React from "react"
import Layout from "../components/layout"
import axios from "axios"
import swal from "sweetalert"
import SEO from "../components/seo"
import { useForm } from "react-hook-form"
import { FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa"

function Kontakt() {
  const { register, handleSubmit, errors, setValue } = useForm()
  const onSubmit = data => {
    axios
      .post(
        "https://us-central1-okwasniewski-62998.cloudfunctions.net/SendMessage",
        data
      )
      .then(res => {
        swal("Udało się!", "Twoja wiadomość została wysłana!", "success")
        setValue([
          { email: "" },
          { name: "" },
          { subject: "" },
          { message: "" },
        ])
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Jeżeli masz jakieś pytania, napisz do mnie!"
      />
      <div className="contact">
        <div className="contact__header">
          <p className="contact__smallHeading">KONTAKT</p>
          <h1 className="contact__heading">
            Masz jakieś pytania? <br></br>
            Napisz do mnie!
          </h1>
        </div>
        <div className="contact__section">
          <div className="contact__left">
            <h3>Inne formy kontaktu</h3>{" "}
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
          <div className="contact__right">
            <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
              <input
                autoComplete="off"
                placeholder="Adres email"
                type="email"
                name="email"
                ref={register}
              />

              <input
                autoComplete="off"
                placeholder="Imię i nazwisko"
                type="text"
                name="name"
                ref={register({ required: true, minLength: 5 })}
              />
              {errors.name && errors.name.type === "required" && (
                <p>To pole jest wymagane</p>
              )}
              {errors.name && errors.name.type === "minLength" && (
                <p>To pole musi zawierać 5 znaków</p>
              )}
              <input
                autoComplete="off"
                placeholder="Temat"
                type="text"
                name="subject"
                ref={register({ required: true, minLength: 5 })}
              />
              {errors.subject && errors.subject.type === "required" && (
                <p>To pole jest wymagane</p>
              )}
              {errors.subject && errors.subject.type === "minLength" && (
                <p>To pole musi zawierać 5 znaków</p>
              )}
              <textarea
                autoComplete="off"
                placeholder="Wiadomość"
                type="message"
                name="message"
                ref={register({ required: true, minLength: 15 })}
              />
              {errors.message && errors.message.type === "required" && (
                <p>To pole jest wymagane</p>
              )}
              {errors.message && errors.message.type === "minLength" && (
                <p>To pole musi zawierać 15 znaków</p>
              )}

              <button className="button" type="submit">
                Wyślij
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Kontakt
