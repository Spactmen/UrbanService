import styles from "../styles/main.module.css"
import CityServiceCard from "../components/CityserviceCard"
import CityAmcCard from "./CityAmcCard"

const Main = () => {



    return (
        <div className={styles.main}>
            <CityServiceCard />
            <CityAmcCard />
        </div>

    )
}
export default Main