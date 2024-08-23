import styles from '@/styles/Projects.module.css'
import ProjectsTabs from './ProjectsTabs'

function Projects() {
  return (
    <div className={styles['projects-main']} id="Projects">
      <div className={styles['project-text']}>
        <h1 className={styles['project-heading']}>
            My Projects
        </h1>
        <p>
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus
        </p>
      </div>

      <div className={styles['projects-view']}>
        <ProjectsTabs />
      </div>
    </div>
  )
}

export default Projects
