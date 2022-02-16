import styles from './Home.module.css'
import savings from '../../images/savings.svg'

import LinkButton from "../layout/LinkButton"
function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo ao <span>Safe Money </span>
      </h1>
      <p>Comece a gerenciar os seus gastos agora mesmo!</p>
      <LinkButton to="/main" text="Acessar" />
      <img src={savings} alt="Savings" />
    </section>
  )
}

export default Home
