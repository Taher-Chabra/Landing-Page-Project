import styles from '@/styles/SkillRange.module.css'

function SkillRange({ label, value }) {
  return (
   <div>
      <label htmlFor="skillRange" className={styles.label}>
         {label}
      </label>
      <div className={styles['range-container']}>
         <input 
            type="range" 
            name="skillRange" 
            id="skillRange"
            className={styles.range}
            min="0" 
            max="100"
            value={value}
            disabled
         />
         <div className={styles['filled-track']} style={{right:`${105-value}%`}}></div>
      </div>
   </div>
   )
}

export default SkillRange
