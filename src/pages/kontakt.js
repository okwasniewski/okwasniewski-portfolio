import React from "react"
import Layout from "../components/layout"
import { Formik } from "formik"
import axios from "axios"
import swal from "sweetalert"
import SEO from "../components/seo"
import { FaFacebook, FaGithub, FaEnvelope } from "react-icons/fa"

function Kontakt() {
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
            <Formik
              initialValues={{ name: "", email: "", subject: "", message: "" }}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                axios
                  .post(
                    "https://us-central1-okwasniewski-62998.cloudfunctions.net/SendMessage",
                    values
                  )
                  .then(res => {
                    setSubmitting(false)
                    resetForm({})
                    swal(
                      "Udało się!",
                      "Twoja wiadomość została wysłana!",
                      "success"
                    )
                  })
                  .catch(err => {
                    console.log(err)
                    setSubmitting(false)
                  })
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <input
                    autoComplete="off"
                    placeholder="Adres email"
                    type="email"
                    id="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />

                  <input
                    autoComplete="off"
                    placeholder="Imię i nazwisko"
                    type="text"
                    id="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />

                  <input
                    autoComplete="off"
                    placeholder="Temat"
                    type="text"
                    id="subject"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.subject}
                  />

                  <textarea
                    autoComplete="off"
                    placeholder="Wiadomość"
                    type="message"
                    id="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />

                  <button
                    className="button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Wyślij
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Kontakt
