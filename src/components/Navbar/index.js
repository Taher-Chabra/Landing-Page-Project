import styles from "@/styles/Navbar.module.css";

function Navbar({scroll, refs}) {
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
            <li onClick={() => scroll(refs.HomeRef)}>
                Home
            </li>
            <li onClick={() => scroll(refs.AboutRef)}>
              About Me
            </li>
            <li onClick={() => scroll(refs.ServicesRef)}>
              Services
            </li>
            <li onClick={() => scroll(refs.ProjectsRef)}>
              Projects
            </li>
            <li onClick={() => scroll(refs.TestimonialsRef)}>
              Testimonials
            </li>
            <li onClick={() => scroll(refs.ContactRef)}>
              Contact
            </li>
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
