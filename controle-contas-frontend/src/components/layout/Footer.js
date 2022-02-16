import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a href="https://github.com/WallaceMartinsTI" rel="noreferrer" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/wallace.santos.790" rel="noreferrer" target="_blank">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/wallace-martins-ti/" rel="noreferrer" target="_blank">
            <FaLinkedin />
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>WCSM | Safe Money</span> &copy; 2022
      </p>
    </footer>
  )
}

export default Footer
