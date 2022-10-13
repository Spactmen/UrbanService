import styles from "../styles/reviews.module.css"
import landingJson from "../JSON/RO-landing.json"
import Image from "next/image"
import star from "../public/star.png"

const Reviews = () => {

    let reviews = landingJson[0].reviews
    console.log(reviews)

    return (
        <div className={styles.reviews}>
            <div className={styles.reviews_inner_div}>
                <div className={styles.reviews_content}>
                    <p className={styles.reviews_head}>  Trusted Services Provider </p>
                </div>
                {
                    reviews.map((review, index) => {
                        return (
                            <div className={styles.reviews_section}>
                                <div className={styles.review_head}>
                                    <p className={styles.review_title}>{review.custName}</p> <p className={styles.review_date}>|</p>
                                    <p className={styles.review_datee}>25/03/2023</p>
                                    <Image src={star} width={13} height={13} className={styles.star}></Image>
                                    <Image src={star} width={13} height={13} ></Image>
                                    <Image src={star} width={13} height={13} ></Image>
                                    <Image src={star} width={13} height={13} ></Image>
                                    <Image src={star} width={13} height={13} ></Image>
                                    <p className={styles.review_no}>(230)</p>
                                </div>
                                <div className={styles.review_description_div}>
                                    <p className={styles.review_description}>{review.review}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Reviews;
