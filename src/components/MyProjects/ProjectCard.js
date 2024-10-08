import styles from '@/styles/ProjectCard.module.css'
import Image from 'next/image'

function ProjectCard({ imgBig, imgSmall, category, title }) {
  return (
     <div className={styles['card-body']}>
      <div className={styles['card-img-container']}>
         <div className={styles['card-img-big']}>
            <Image 
               src={imgBig} 
               alt='Big Design image '
               width={190}
               height={300}
               className={styles.img}
            />

            <div className={styles['card-img-small']}>
               <Image 
                  src={imgSmall} 
                  alt='Small Design image '
                  width={190}
                  height={247} 
               />
            </div>
         </div>
      </div>

      <div className={styles["card-details"]}>
         <span className={styles["details-category"]}>
            {category}
         </span>
         <p className={styles["details-title"]}>
            {title}
         </p>
      </div>
   </div>
  )
}

export default ProjectCard
