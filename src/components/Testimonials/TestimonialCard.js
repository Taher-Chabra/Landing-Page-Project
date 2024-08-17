import styles from '@/styles/TestimonialCard.module.css'

function TestimonialCard({ image, testimonial, name, designation }) {
  return (
    <div className={styles['card-body']}>
      <div className={styles['card-img']}>
         {image}
      </div>

      <div className={styles['card-text']}>
        <p>
          <span className={styles['card-lquote']}>&ldquo;</span>
          {testimonial}
          <span className={styles['card-rquote']}>&rdquo;</span>
        </p>

        <div>
          <span className={styles['card-name']}>{name}</span><br />
          <span className={styles['card-designation']}>{designation}</span>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
