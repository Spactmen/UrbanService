import styles from '../styles/CityHero.module.css'
import ROLanding from '../JSON/RO-landing.json'
import { useEffect } from 'react';

const CityHero = () => {
    let heroSection = ROLanding[0].heroSection;
    let notes = heroSection.notes;
    return (
        <div className={styles.hero_section} style={{backgroundImage : `url('${heroSection.webBanner}')` ,backgroundSize:"cover"}}>
            <div className={styles.hero_section_1}>

            <p className={styles.hero_head}>{heroSection.heading}</p>
            <ul>
                {notes.map((note,index) => {
                    return (<li className={styles.note} key={index}>{note}</li>)
                })}
            </ul>
            </div>
            
        </div>
    )
}

export default CityHero