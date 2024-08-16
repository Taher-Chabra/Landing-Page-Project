import styles from '@/styles/AboutMe.module.css'
import Image from 'next/image'
import SkillRange from './SkillRange'
import personImg from "../../../public/About-assets/image2.png"
import personImgCrp from "../../../public/About-assets/image2-cropped.png"

function AboutMe() {
  return (
    <div className={styles['about-main']}>
      <div className={styles['about-avatar']}>
        <div className={styles["person-avatar"]}>
          <div className={styles["person-wrapper"]}>
            <div className={styles["person-container"]}>
              <Image
                src={personImg}
                alt="Person image 2"
                width={330}
                height={340}
                quality={50}
                priority={true}
                className={styles["person-img"]}
              />
            </div>
            <div className={styles["person-img-crop"]}>
              <Image
                src={personImgCrp}
                alt="Person image 2"
                width={330}
                height={150}
                quality={50}
              />
            </div>
            <div className={styles["person-mask"]}></div>
          </div>
        </div>
      </div>

      <div className={styles['about-info']}>
        <div>
          <h1 className={styles['info-heading']}>
            About Me
          </h1>
          <p className={styles['info-text']}>
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra
          </p>
        </div>

        <div>
          <SkillRange label="UX" value={93}/>
          <SkillRange label="Website Design" value={90}/>
          <SkillRange label="App Design" value={97}/>
          <SkillRange label="Graphic Design" value={93}/>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
