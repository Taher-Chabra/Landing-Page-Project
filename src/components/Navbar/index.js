import styles from "@/styles/Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
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
      <div className={styles.navigate}>
        <nav className={styles['nav-links']}>
          <ul className={styles['nav-list']}>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
          </ul>
        </nav>
        <a href="" className={styles['dwnld-btn']} download>
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Navbar;
