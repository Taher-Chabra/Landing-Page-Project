import styles from "@/styles/Hero.module.css";
import personImg from '../../../public/Hero-assets/image1.png'
import personImgCrp from '../../../public/Hero-assets/image1-cropped.png'
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function HeroSection() {
  return (
    <div className={styles["hero-main"]}>
      <div className={styles["my-info"]}>
        <div>
          <span className={styles["info-greet"]}>Hi I am</span>
          <br />
          <span className={styles["info-name"]}>Muhammad Umair</span>
          <br />
          <span className={styles["info-role"]}>
            UI &amp; UX <br />
            <span className={styles.designer}>Designer</span>
          </span>
        </div>
        <p className={styles["info-text"]}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>
        <a href="" className={styles["hire-btn"]}>
          Hire Me
        </a>
      </div>
      
      <div className={styles['person-socials']}>
        <div className={styles["person-avatar"]}>
          <div className={styles["person-wrapper"]}>
            <div className={styles["person-container"]}>
              <Image
                src={personImg}
                alt="Person image 1"
                width={272}
                height={340}
                quality={50}
                priority={true}
                className={styles["person-img"]}
              />
            </div>
            <div className={styles["person-img-crop"]}>
              <Image
                src={personImgCrp}
                alt="Person image 1"
                width={272}
                height={150}
                quality={50}
              />
            </div>
            <div className={styles["person-mask"]}></div>
          </div>
        </div>
        <div className={styles['social-icons']}>
          <a href="" className={styles['social-links']}><FaFacebook /></a>
          <a href="" className={styles['social-links']}><FaTwitter /></a>
          <a href="" className={styles['social-links']}><FaInstagram /></a>
          <a href="" className={styles['social-links']}><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
