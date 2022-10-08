import styles from '../styles/About.module.css'
import selectCity from '../JSON/selectCity.json'
import clock from '../public/clock.png'
import doctor from '../public/doctor.png'
import protectedImg from '../public/protected.png'
import rupee from '../public/rupee.png'
import Image from 'next/image'

const About = () => {

    let AboutSection = selectCity[0].banner4
    return (
        <div className={styles.about_section}>
            <div className={styles.about_data}>
                <div className={styles.about_title_div}>
                    <p className={styles.about_title}> {AboutSection.title}</p>
                </div>
                <p className={styles.about_description}>{AboutSection.description}</p>
            </div>
            <div className={styles.about_boxes}>
                <div className={styles.about_box}>
                    <div className={styles.about_box_inner}>
                        <Image src={clock} alt="clock-image"></Image>
                        <p className={styles.about_box_description}>ON TIME SERVICE</p>
                    </div>
                </div>
                <div className={styles.about_box}>
                    <div className={styles.about_box_inner}>
                        <Image src={doctor} alt="doctor-image"></Image>
                        <p className={styles.about_box_description}>ON TIME SERVICE</p>
                    </div>
                </div>
                <div className={styles.about_box}>
                    <div className={styles.about_box_inner}>
                        <Image src={rupee} alt="rupee-image"></Image>
                        <p className={styles.about_box_description}>ON TIME SERVICE</p>
                    </div>
                </div>
                <div className={styles.about_box}>
                    <div className={styles.about_box_inner}>
                        <Image src={protectedImg} alt="protectedImg-image"></Image>
                        <p className={styles.about_box_description}>ON TIME SERVICE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;