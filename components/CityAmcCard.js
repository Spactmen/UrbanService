import styles from "../styles/CityAmcCard.module.css"
import landingJson from "../JSON/RO-landing.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import correct from "../public/tick.png"
import wrong from "../public/wrong.png"
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import { useRef } from "react";
import { useState } from "react"

// import { leftArrow } from "../public/left_arrow.png"
// import { rightArrow } from "../public/right_arrow.png"

const CityAmcCard = (props) => {
    let {cityData} = {...props}

    let cardSection = cityData[0].cards
    let amcCards = []
    cardSection.forEach((card) => {
        if (card.cardType === "amc") {
            amcCards.push(card)
        }
    })
    const slider = useRef(null);


    let settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 904,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };






    return (

        <div className={styles.amc_div}>
            <div className={styles.amc_inner_div}>
                <div className={styles.amc_content}>
                    <p className={styles.amc_head}>  Browse AMC Plans </p>
                    <div className={styles.btn_div}>
                        <button className={styles.prev_btn} onClick={() => slider?.current?.slickPrev()}>
                            &lt;
                            {/* <Image src={leftArrow} width={30} height={30}></Image> */}
                        </button>
                        <button className={styles.next_btn} onClick={() => slider?.current?.slickNext()}>
                            &gt;
                            {/* <Image src={rightArrow} width={30} height={30}></Image> */}
                        </button>
                    </div>
                </div>

                <div className={styles.slider}>


                    <Slider ref={slider}  {...settings} >
                        {amcCards.map((card, index) => {
                            const covers = card.covers;
                            const src = card.cardBanner;
                            const [isHovering, setisHovering] = useState(false)


                            return (
                                <div key={index} className={styles.border_div}>
                                    <div className={styles.amc_card}>
                                        <div className={styles.amc_card_img}>
                                            <Image loader={() => src} src={src} alt="amc_banner" width={16}  height={9} layout="responsive" ></Image>
                                        </div>
                                        <div className={styles.amc_card_content}>
                                            <p className={styles.amc_card_head}> {card.title} </p>
                                            <div>
                                                {covers.map((cover, index) => {
                                                    const splittedCover = cover.split(": ")
                                                    return (
                                                        <div key={index} className={styles.amc_card_cover}>
                                                            <p className={styles.amc_card_cover_title}>{splittedCover[0]}</p>
                                                            {splittedCover[1] == "true" ?
                                                                <div className={styles.amc_bio_div}>
                                                                    <Image src={correct} width={15} height={15}alt="tick" ></Image>
                                                                    <p className={styles.amc_bio}>include</p>
                                                                </div>
                                                                :
                                                                <div className={styles.amc_bio_div}>
                                                                    <Image src={wrong} width={15} height={15} alt="wrong"></Image>
                                                                    <p className={styles.amc_bio}>exclude</p>
                                                                </div>
                                                            }
                                                        </div>

                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className={styles.amc_card_price_bio}>
                                            <p className={styles.amc_card_price}>Rs.{card.price}</p>
                                            <p className={styles.amc_card_caution} onMouseEnter={() => { setisHovering(true) }} onMouseLeave={() => { setisHovering(false) }}>*T&C Apply</p>
                                            {isHovering && <div className={styles.modal}>
                                                <p className={styles.modal_desc}>Note: Spare Parts Will be used in AIMC Plans</p>
                                            </div>}
                                            <button className={styles.amc_card_btn} type="submit">Book now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </Slider>
                </div>




            </div>
        </div>

    )
}

export default CityAmcCard;