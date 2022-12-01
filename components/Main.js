import styles from "../styles/main.module.css"
import CityServiceCard from "../components/CityserviceCard"
import CityAmcCard from "./CityAmcCard"
import Link from "next/link"

const Main = (props) => {
    let { cityData, cityRoute } = { ...props }
    let breadCrum = cityRoute[0].meta_jsonLd
    console.log(cityRoute)
  

    return (
        <div className={styles.main}>
            <div className={styles.breadcrum_div}>
                <div className={styles.breadcrum}>
                    {/* {
                        breadCrum.itemListElement.map((elem)=>{
                            return(
                                <div>
                                    <Link href></Link>
                                </div>
                            )
                        })
                    } */}
                    <div className={styles.dreadcrum_box}>
                        <p><Link href={breadCrum.itemListElement[0].item}>{breadCrum.itemListElement[0].name}</Link></p>
                    </div>
                    <div className={styles.dreadcrum_box}>
                        <p>{cityData[0].serviceZone.toUpperCase()}</p>
                    </div>

                </div>
            </div>
            <div className={styles.head}>
                <h2>{breadCrum.itemListElement[1].name}</h2>
            </div>
    
            <CityServiceCard cityData={cityData} />
            <CityAmcCard cityData={cityData} />
        </div>

    )
}
export default Main