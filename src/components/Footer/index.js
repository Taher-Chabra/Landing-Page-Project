import styles from '@/styles/Footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles['footer-main']}>
      <div className={styles['footer-navigate']}>
        <div className={styles['nav-logo']}>
          <div className={styles.logo}>
            <span className={styles.icon}>
              mu
            </span>
            <span className={styles.name}>
              M
              <span className={styles.letters}>
                umair
              </span>
            </span>
          </div>
        </div>

        <div className={styles['nav-links']}>
          <div className={styles.navigate}>
            <nav>
              <ul className={styles['nav-list']}>
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Testimonials</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles['nav-social']}>
          <a href="" className={styles['social-icon']}><FaFacebook /></a>
          <a href="" className={styles['social-icon']}><FaTwitter /></a>
          <a href="" className={styles['social-icon']}><FaInstagram /></a>
          <a href="" className={styles['social-icon']}><FaLinkedin /></a>
        </div>
      </div>

      <div className={styles['footer-credits']}>
        <p className={styles['credit-text']}>&copy; 2023 <span className={styles.mumair}>Mumair</span> All Rights Reserved , Inc.</p>
      </div>
    </footer>
  )
}

export default Footer
