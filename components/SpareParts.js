import styles from "../styles/spareparts.module.css"
import landingJson from "../JSON/RO-landing.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import spare1 from "../public/spare1.png";
import { useRef } from "react";
import { useState } from "react"



const SpareParts = () => {

    let spare_parts = landingJson[0].spareParts;
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
        <div className={styles.spare_div}>
            <div className={styles.spare_inner_div}>
                <div className={styles.spare_content}>
                    <p className={styles.spare_head}>  Spare Parts Price with Brands </p>
                    <div className={styles.btn_div}>
                        <button className={styles.prev_btn} onClick={() => slider?.current?.slickPrev()}>
                            &lt;
                        </button>
                        <button className={styles.next_btn} onClick={() => slider?.current?.slickNext()}>
                            &gt;
                        </button>
                    </div>
                </div>
                <div className={styles.slider}>
                    <Slider ref={slider} {...settings} >
                        {spare_parts.map((card, index) => {
                            
                            const spareParts = card.spareParts;

                            return (
                                <div  key={index} className={styles.border_div}>

                                    <div className={styles.spare_card}>
                                        <div className={styles.spare_card_img}>
                                            <Image src={spare1} alt="amc_banner" width={16} height={9} layout="responsive" ></Image>
                                        </div>
                                        <div className={styles.spare_card_content}>
                                            <p className={styles.spare_card_head}> {card.title} </p>
                                            <div>
                                                {spareParts.map((sparePart, index) => {
                                                    return (
                                                        <div key={index} className={styles.spare_card_cover}>
                                                            <p className={styles.spare_card_cover_title}>{sparePart.partName}</p>
                                                            <p className={styles.spare_bio}>{sparePart.price}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
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

export default SpareParts;