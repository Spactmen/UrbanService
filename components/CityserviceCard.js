import styles from "../styles/CityServiceCard.module.css"
import landingJson from '../JSON/RO-landing.json'
import ServiceCard from "./ServiceCard.js"


const CityServiceCard = () => {
    let cardSection = landingJson[0].cards
    let serviceCards = []
    cardSection.forEach((card)=> {
        if(card.cardType === "service"){
            serviceCards.push(card)
        }
    })


    return (
    <div className={styles.service_card}>
        <div className={styles.cards_section}>
            <div className={styles.cards_content}>
            {
                serviceCards.length >1? serviceCards.map((card,index)=>{return <ServiceCard card={card}></ServiceCard>}): () => {return <h1>no data</h1>}
            }
                
            </div>
            
        </div>
        <div className={styles.dropdown_content}>
            <div className={styles.dropdown}>
                <select name="services" className={styles.dropdown_menu}>
                    <option>Select Water-purifier-options</option>    
                </select>
                <div className={styles.dropdown_inputs}>
                    <input placeholder="Enter name" className={styles.dropdown_input_1}></input>
                    <input placeholder="Phone Number" className={styles.dropdown_input_1}></input>
                </div>
                <input placeholder="Pincode or Address" className={styles.dropdown_input_2}></input>
                <button type="submit" className={styles.dropdown_btn}>submit</button>
            </div>
        
        </div>

    </div>)
}

export default CityServiceCard;