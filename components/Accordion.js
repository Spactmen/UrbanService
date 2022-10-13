import styles from "../styles/accordion.module.css"
import { useState } from "react"

const Accordion = ({question,answer}) => {
    let answerResult = answer[1]
    let questionResult = question[1]
    const [show, SetShow] = useState(false)


    return (
        <div className={styles.accordion_box}>
            <div onClick={() => { SetShow(!show) }} className={styles.question_div}>
                <p  className={styles.question_plus}>+</p>
                <p className={styles.question}>{questionResult}</p>
            </div>
            {show && <p className={styles.answer}>{answerResult}</p>}
        </div>)
}

export default Accordion
