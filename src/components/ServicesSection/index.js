import styles from '@/styles/Services.module.css'
import { servicesData } from '@/data/servicesData'
import Cards from './Cards'

function Services() {

  return (
   <div className={styles['services-main']} id="Services">
      <div className={styles['service-info']}>
         <h1 className={styles['service-heading']}>
            Services
         </h1>
         <p>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
         </p>
      </div>

      <div className={styles['service-cards']}>
         {servicesData.map((service) => {
            return (
               <div key={service.id}>
                  <Cards 
                     icon={service.icon}
                     skill ={service.skill}
                     description ={service.description}
                  />
               </div>
            )
         })}
      </div>
   </div>
  )
}

export default Services
