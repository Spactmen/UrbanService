import styles from "../styles/ServiceCard.module.css"
import landingJson from "../JSON/RO-landing.json"
import { HiOutlineCheckCircle } from "react-icons"
import Image from "next/image"
import check from "../public/check.png"
import { useState } from "react"

const ServiceCard = ({ card,cityData}) => {
    let cardSection = cityData[0].cards
    let serviceCards = []
    let notes = card.notes
    cardSection.forEach((card) => {
        if (card.cardType === "service") {
            serviceCards.push(card)
        }
    })
    const src = card.cardBanner;
    const [isHovering, setisHovering] = useState(false)


    return (
        <div className={styles.service_card_content}>
            <div className={styles.service_card}>
                <div className={styles.service_card_img}>
                    <Image loader={() => src} src={src} width={100} height={50} className={styles.image} layout="responsive" alt="service banner"></Image>
                </div>
                <div className={styles.service_card_details}>
                    <p className={styles.service_card_title}>{card.title}</p>
                    {
                        notes.map((note,index) => {
                            return (
                                <div  key={index} className={styles.service_card_note}>
                                    <Image src={check} width={15} height={15} alt="check"></Image>
                                    <p className={styles.service_card_description}>{note}</p>
                                </div>)
                        })
                    }
                    <div className={styles.service_card_price_bio}>
                        <p className={styles.service_card_price}>Rs.{card.price}</p>
                        <p className={styles.service_card_caution} onMouseEnter={() => { setisHovering(true) }} onMouseLeave={() => { setisHovering(false) }}>*T&C Apply</p>
                        {isHovering && <div className={styles.modal}>
                            <p className={styles.modal_desc}>Note: Spare Parts Will be used in AIMC Plans</p>
                        </div>}
                        <button className={styles.service_card_btn} type="submit">Book now</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ServiceCard