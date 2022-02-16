import styles from "./Team.module.css"
import avatar1 from "../../images/avatar1.png"
import avatar2 from "../../images/avatar2.png"
import devImg from "../../images/eu-profissional.jpg"

function Team() {
  return (
    <section className={styles.team_container}>
      <h1>Equipe <strong>WCSM Safe Money</strong></h1>
      <div>
        <ul>
          <li>
            <img src={avatar1} alt="avatar1" />
            <div>
              <strong>Lucas M Lemos</strong>
              <p>Designer Jr.</p>
            </div>
          </li>
          <li>
            <img src={devImg} alt="devImg" />
            <div>
              <strong>Wallace C S Martins</strong>
              <p>Fullstack Developer Jr.</p>
            </div>
          </li>
          <li>
            <img src={avatar2} alt="avatar2" />
            <div>
              <strong>Larissa G Silva</strong>
              <p>Tech Lead</p>
            </div>
          </li>
        </ul>

        <p className={styles.team_description}>
          A equipe da WCSM responsável pelo desenvolvimento da aplicação
          <strong> Safe Money</strong> é composta pelos nossos profissionais
          que estão em constante crescimento e que buscaram uma oportunidade 
          de colocar em prática todo conhecimento adiquirido.<br/><br/>Contamos
          com o Lucas, que foi responsável por elaborar toda a parte do design
          do site, o Wallace, que realizou todo o trabalho do desenvolvimento
          Frontend e Backend, sua implementação e deploy, e contamos também com
          a Larissa que foi a líder do projeto, orientando e mantendo a comunicação
          com as demais equipes exercendo um ótimo gerenciamento do projeto.
        </p>
      </div>
    </section>
  )
}

export default Team