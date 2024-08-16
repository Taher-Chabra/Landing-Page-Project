import styles from '@/styles/Projects.module.css'

function Projects() {
  return (
    <div className={styles['projects-main']}>
      <div className={styles['project-text']}>
        <h1 className={styles['project-heading']}>
            My Projects
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus
        </p>
      </div>

      <div className={styles['projects-view']}>
        <div className={styles['view-tabs']}>
          <button>All</button>
          <button>UI/UX</button>
          <button>WebDesign</button>
          <button>App Design</button>
          <button>Graphic Design</button>
        </div>
        <div className={styles['view-cards']}>

        </div>
      </div>
    </div>
  )
}

export default Projects
