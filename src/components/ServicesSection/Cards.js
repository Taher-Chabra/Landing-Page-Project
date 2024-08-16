import styles from "@/styles/ServicesCards.module.css";

function Cards({ icon, skill, description }) {
  return (
    <div className={styles["card-body"]}>
      <div className={styles['card-icon']}>
        {icon}
      </div>
      <h4 className={styles['card-role']}>
        {skill}
      </h4>
      <p className={styles['card-desc']}>
        {description}
      </p>
    </div>
  );
}

export default Cards;
