import React from "react"
import Layout from "../components/layout"
import { Formik } from "formik"
import axios from "axios"
import swal from "sweetalert"

function Contact() {
  return (
    <Layout>
      <div className="contact">
        <div className="contact__header">
          <p className="contact__smallHeading">KONTAKT</p>
          <h1 className="contact__heading">
            Masz jakieś pytania? <br></br>
            Napisz do mnie!
          </h1>
        </div>
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

              <button className="button" type="submit" disabled={isSubmitting}>
                Wyślij
              </button>
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  )
}

export default Contact
