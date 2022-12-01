import styles from '../styles/CityHero.module.css'
import { useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import Image from 'next/image';
import SampleNextArrow from "../components/SampleNextArrow"
import SamplePrevArrow from "../components/SamplePrevArrow"



const CityHero = (props) => {
    let { cityData, cityRoute } = { ...props }
    let heroSection = cityData[0].heroSection;
    let offerBanner = cityData[0].offerBanner
    let notes = heroSection.notes;
    const slider = useRef(null);
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },

        ]
    };


    // console.log(props.citydata[0])
    return (
        <>
            <div className={styles.hero_section} style={{ backgroundImage: `url('${heroSection.webBanner}')`, backgroundSize: "cover" }}>
                <div className={styles.hero_section_1}>

                    <p className={styles.hero_head}>{heroSection.heading}</p>
                    <ul>
                        {notes.map((note, index) => {
                            return (<li className={styles.note} key={index}>{note}</li>)
                        })}
                    </ul>
                </div>
            </div>
            <div className={styles.offer_banner}>
                <div className={styles.bannner_div}>

                    <Slider ref={slider}  {...settings} >
                        {
                            offerBanner.map((banner,index) => {

                                const src = banner.imgUrl;

                                return (
                                    <div key={index} className={styles.offer_img_div}>
                                        <Image loader={() => src} alt="offer banner" className={styles.image} src={src} width={300} height={200}  ></Image>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

            </div>
        </>
    )
}

export default CityHero