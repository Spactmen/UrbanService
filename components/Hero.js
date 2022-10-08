import styles from '../styles/Hero.module.css'
import { useState, useEffect } from 'react'
import selectCity from '../JSON/selectCity.json'
import Link from 'next/link'

const Hero = () => {
    let cities = selectCity[0].cities;
    const [citylandingUrl, SetCityLandingUrl] = useState('')

    const HandleChange = (e) => {
        SetCityLandingUrl(e.target.value);
        console.log(citylandingUrl)
    }

    return (

        <div className={styles.hero_section}>

            <div className={styles.right_hero_section}>
                <p className={styles.hero_head}>URBAN CLEANING EXPERT</p>
                <h2 className={styles.hero_tittle}>Quality home cleaning servcies, <br></br>on demand</h2>
                <p className={styles.hero_quote}>Experienced, hand-picked professionals to serve you at your doorstep</p>
                <div className={styles.dd_menu_div}>
                    <div>
                        <p className={styles.dd_menu_title}> where do you need a service</p>
                        <select name='city' className={styles.dd_menu} onChange={HandleChange}>
                            <option value={"/"}>--Select City--</option>
                            {
                                cities.map((city, index) => {
                                    return <option value={city.landingUrl} key={index}>{city.title}</option>
                                })
                            }
                        </select>
                        <button className={styles.city_btn}><Link href={`/cities/${citylandingUrl}`}>Search</Link></button>
                    </div>
                </div>




            </div>


        </div>
    )
}



export default Hero;