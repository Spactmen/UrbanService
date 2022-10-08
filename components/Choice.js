import styles from "../styles/choice.module.css"
import choice_img from '../public/choice-img.png'
import Image from "next/image"


const Choice = () => {
    return (
        <div className={styles.choice_div} >
            <Image src={choice_img} alt="choice-image" className={styles.choice_image}></Image>
            <div className={styles.choice_data}>
                <h2 className={styles.choice_head}>Why People Choose Us</h2>
                <ul className={styles.choice_list}>
                    <li>Affordable Rates</li>
                    <li>On Time Service</li>
                    <li>Verified Professionals</li>
                    <li>Excellent Service</li>
                </ul>
            </div>
        </div>
    )
}

export default Choice