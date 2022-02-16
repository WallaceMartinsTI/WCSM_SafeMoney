import styles from "./About.module.css"

function About() {
  return (
    <section className={styles.about_container}>
      <div>
        <h1>Sobre o projeto</h1>
        <p>
        Realizei este projeto para praticar meu conhecimento como FullStack, desenvolvendo
        o Frontend utilizando a biblioteca ReactJS a qual estou estudando no momento, e
        desenvolvi o Backend utilizando o Django Rest Framework para praticar meu conhecimento
        na linguagem Python e neste framework incrível que é o Django.
        </p>
      </div>
    </section>
  )
}

export default About