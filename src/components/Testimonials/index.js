import styles from '@/styles/Testimonials.module.css'
import TestimonialCardCarousal from './CardCarousel'

function Testimonials() {
  return (
    <div className={styles['testimonial-main']} id="Testimonials">
      <div className={styles['testimonial-text']}>
         <h1 className={styles['testimonial-heading']}>
            Testimonials
         </h1>
         <p>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
         </p>
      </div>

      <div className={styles['testimonial-cards']}>
         <TestimonialCardCarousal />
      </div>
    </div>
  )
}

export default Testimonials
