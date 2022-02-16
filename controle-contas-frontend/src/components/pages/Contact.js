import styles from "./Contact.module.css"
import ContactMail from "../form/ContactMail"

function Contact() {
  return (
    <section className={styles.contact_container}>
      <div>

      <h1>Contato</h1>
      <ContactMail />
      </div>
    </section>
  )
}

export default Contact