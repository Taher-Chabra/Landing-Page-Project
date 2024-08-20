import styles from '@/styles/ProjectsCardsView.module.css'
import ProjectCard from './ProjectCard'
import design1 from '../../../public/Projects-assets/design1.png'
import design1Small from '../../../public/Projects-assets/design1-sm.png'
import design2 from '../../../public/Projects-assets/design2.png'
import design2Samll from '../../../public/Projects-assets/design2-sm.png'
import design3 from '../../../public/Projects-assets/design3.png'
import design3Small from '../../../public/Projects-assets/design3-sm.png'

function ProjectsCardsView({ category }) {
  return (
    <div>
      {
        (category === "all" || category === 'web')?
        <div className={styles['project-content']}>
          <ProjectCard 
            imgBig={design1} 
            imgSmall={design1Small}
            category='Web Design'
            title="AirCalling Landing Page Design"
          />
          <ProjectCard 
            imgBig={design2} 
            imgSmall={design2Samll}
            category='Web Design'
            title="Business Landing Page Design"
          />
          <ProjectCard 
            imgBig={design3} 
            imgSmall={design3Small}
            category='Web Design'
            title="Ecom Web Page Design"
          />
        </div> 
        :
        <div className={styles['no-project-content']}>
          No projects available
        </div>
      }
    </div>
  )
}

export default ProjectsCardsView
