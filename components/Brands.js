import styles from "../styles/Brands.module.css"
import landingJson from "../JSON/RO-landing.json"
import Image from "next/image"

const Brands = () => {
    const brands = landingJson[0].brands

    console.log(brands);
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
                                <Image src={brand} width={50} height={50} layout="responsive" alt="image" className={styles.brand_img}></Image>
                            </div>

                        )

                    })}
                </div>
            </div>
        </div>
    )
}
export default Brands