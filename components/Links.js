import Link from 'next/link';
import React from 'react'
import styles from "../styles/Links.module.css"

const Links = (props) => {
    const { cityData, cityRoute } = { ...props }
    const path = cityRoute[0].path.slice(1)
    let servingAreas, availableAreas;
    if (cityData[0].internalLinks.hasOwnProperty("servingAreas")) {
        servingAreas = cityData[0].internalLinks.servingAreas.slice(0, 10);
    }
    // console.log(servingAreas)
    if (cityData[0].internalLinks.hasOwnProperty("alsoAvailableIn")) {
        availableAreas = cityData[0].internalLinks.alsoAvailableIn.slice(0, 10)
    }
    // console.log(availableAreas);

    return (
        <>
            <div className={styles.links}>
                <div className={styles.links_inner_div}>
                    <div className={styles.links_content}>
                        <p className={styles.links_head}>  QuickLinks </p>
                    </div>
                    {servingAreas && <div>
                        <div className={styles.serving_links_content}>
                            <p className={styles.serving_links_head}>  Serving in </p>
                        </div>
                        <div>
                            <ul className={styles.areas}>
                                {servingAreas.map((area,index) => {
                                    return <Link key={index} href={`/cities/${area.link.slice(1)}`}><li><span>{area.anchorText}</span></li></Link>
                                })}
                            </ul>
                            <Link href={`/quicklinks/${path}`}>see more</Link>
                            {/* <p><Link></Link></p> */}
                        </div>

                    </div>}
                    {
                        availableAreas && <div>
                            <div className={styles.available_links_content}>
                                <p className={styles.available_links_head}>  Available in </p>
                            </div>
                            <div>
                                <ul className={styles.areas}>
                                    {availableAreas.map((area,index) => {
                                        return <Link key={index} href={"/quicklinks"}><li><span>{area.anchorText}</span></li></Link>
                                    })}
                                </ul>
                                <Link className={styles.link} href={`/quicklinks/${path}`} cityData={cityData}>see more</Link>
                            </div>

                        </div>
                    }

                </div>


            </div>
        </>
    )
}

export default Links