import styles from "../styles/Brands.module.css"
import landingJson from "../JSON/RO-landing.json"
import Image from "next/image"

const Brands = (props) => {
    let {cityData,cityRoute} = {...props}
    const brands = cityData[0].brands
    const description_long = cityRoute[0].description_long

    return (
        <div className={styles.brand}>
            <div className={styles.brand_inner_div}>
                <div className={styles.brands_content}>
                    <p className={styles.brands_head}>  Trusted Services Provider </p>
                </div>

                <div className={styles.brand_images}>
                    {brands.map((brand,index) => {
                        return (
                            <div className={styles.brand_img_div} key={index}>
                                <Image src={brand} width={300} height={300} layout="responsive" alt="image" className={styles.brand_img}></Image>
                            </div>

                        )

                    })}
                </div>
                <div dangerouslySetInnerHTML={{ __html: `${description_long}`}} className={styles.decriptionLongDiv}>
            </div>


            </div>
        </div>
    )
}
export default Brands