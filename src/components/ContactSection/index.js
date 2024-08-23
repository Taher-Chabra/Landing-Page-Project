import styles from "@/styles/Contact.module.css";

function ContactMe() {
  return (
    <div className={styles["contact-main"]} id="Contact">
      <div className={styles["contact-text"]}>
         <h1 className={styles["contact-heading"]}>
            Lets Design Together
         </h1>
         <p>
            Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
            mauris est risus lectus. Phasellus consequat urna tellus
         </p>
      </div>

      <div className={styles['contact-input']}>
         <input 
            type="email" 
            placeholder="Enter Your Email" 
            className={styles.input}
         />
         <button className={styles['contact-btn']}>
            Contact Me
         </button>
      </div>
    </div>
  );
}

export default ContactMe;
