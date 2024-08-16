import styles from '@/styles/TestimonialCard.module.css'

function TestimonialCard({ image, testimonial, name, designation }) {
  return (
    <div className={styles['testimonial-body']}>
      <div className={styles['testimonial-img']}>
         {image}
      </div>

      <div className={styles['testimonial-text']}>
         <span>"</span>
         <p>{testimonial}</p>
         <span>"</span>
         <div>
            <span>{name}</span>
            <span>{designation}</span>
         </div>
      </div>
    </div>
  )
}

export default TestimonialCard
