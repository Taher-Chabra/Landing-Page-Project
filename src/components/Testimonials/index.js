import styles from '@/styles/Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles['testimonial-main']}>
      <div className={styles['testimonial-text']}>
         <h1 className={styles['testimonial-heading']}>
            Testimonials
         </h1>
         <p>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium
         </p>
      </div>

      <div className={styles['testimonial-cards']}>
         {/*  */}
      </div>
    </div>
  )
}

export default Testimonials
