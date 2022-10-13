import styles from "../styles/faq.module.css"
import landingJson from "../JSON/RO-landing.json"
import { useState } from "react"
import Accordion from "./Accordion"



const Faq = () => {

    let faq = landingJson[0].faq

    return (
        <div className={styles.faq}>
            <div className={styles.faq_inner_div}>
                <div className={styles.faq_content}>
                    <p className={styles.faq_head}>  Frequently Asked Questions? </p>
                </div>
                <div className={styles.accordion}>
                    {
                        faq.map((element, index) => {
                            let question = element.question.split(": ")
                            let answer = element.answer.split(": ")
                            return (
                                <div  key={index}>
                                    <Accordion key={index} question={question} answer={answer}/>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Faq