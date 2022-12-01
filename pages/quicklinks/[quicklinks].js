import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/[quicklinks].module.css"
import Ro_common from "../../JSON/RO-common.json"
import Ro_routes from "../../JSON/RO-routes.json"
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'

export const getServerSideProps = async (context) => {
    let pathname = "/" + context.params.quicklinks
    let cityRoute, cityData;
    Ro_routes.filter((route) => route.path === pathname || pathname === route.path + "/")
        .map((data) => {
            cityRoute = data;
            Ro_common.filter((city) => city.serviceZone == cityRoute.zoneId).map((city_data) => { cityData = city_data })
        })


    // const router = useRouter();
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     Setpathname("/" + router.query.quicklinks)
    //     let cityRoute, cityData;
    //     Ro_routes.filter((route) => route.path === pathname || pathname === route.path + "/")
    //         .map((data) => {
    //             cityRoute = data;
    //             Ro_common.filter((city) => city.serviceZone == cityRoute.zoneId).map((city_data) => { cityData = city_data })
    //         })
    //     console.log(cityRoute)
    //     console.log(cityData)
    // }, [router.isReady]);
    return {
        props: {
            cityRoute, cityData
        }
    }

}

const quicklinks = (props) => {
    const cityRoute = props.cityRoute
    const cityData = props.cityData
    console.log(cityData)
    let availableAreas, servingArea;
    if (cityData.internalLinks.hasOwnProperty("servingAreas")) {
        servingArea = cityData.internalLinks.servingAreas
    }
    const servingAreas = cityData.internalLinks.servingAreas;
    console.log(servingAreas)

    if (cityData.internalLinks.hasOwnProperty("alsoAvailableIn")) {
        availableAreas = cityData.internalLinks.alsoAvailableIn;
    }
    console.log(availableAreas);


    return (
        <div className={styles.container}>
            <div className={styles.links_inner_div}>
                <div className={styles.links_content}>
                    <p className={styles.links_head}>  QuickLinks </p>
                    <Link href={`/cities/ludhiana`}>Home</Link>
                </div>
                <div>
                    <div className={styles.serving_links_content}>
                        <p className={styles.serving_links_head}>  Serving in </p>
                    </div>
                    <div className={styles.servingLinks}>
                            {servingAreas.map((area, index) => {
                                console.log(`/cities/${area.link.slice(1)}`)
                                return (
                                    <div>
                                        {index === 0 ? null : <span>•&nbsp;</span>}
                                        <a href={`/cities/${area.link.slice(1)}`} >{area.anchorText}&nbsp;</a>
                                        {/* <Link key={index} href={`/cities/${area.link.slice(1)}`}><li><span>{area.anchorText}</span></li></Link> */}
                                    </div>
                                )
                            })}
                    </div>

                </div>
                {
                    availableAreas && <div>
                        <div className={styles.available_links_content}>
                            <p className={styles.available_links_head}>  Available in </p>
                        </div>
                        <div className={styles.servingLinks}>

                                {availableAreas.map((area, index) => {
                                    return (
                                        <div>
                                            {index === 0 ? null : <span>•&nbsp;</span>}
                                            <a href={`/cities/${area.link.slice(1)}`} >{area.anchorText}&nbsp;</a>
                                            {/* <Link key={index} href={`/cities/${area.link.slice(1)}`}><li><span>{area.anchorText}</span></li></Link> */}
                                        </div>
                                    )
                                })}
                        </div>

                    </div>
                }

            </div>
        </div>
    )
}

// quicklinks.getInitailProps = async () => {
//     const [pathname,Setpathname] = useState("")
//     const router = useRouter();
//     useEffect(() => {
//         if (!router.isReady) return;
//          Setpathname("/"+router.query.quicklinks)
//     }, [router.isReady]);
//     console.log(pathname)


//     let cityRoute,cityData;
//     Ro_routes.filter((route) => route.path === pathname || pathname === route.path + "/")
//         .map((data)=> {
//             cityRoute =  data;
//             Ro_common.filter((city) => city.serviceZone == cityRoute.zoneId).map((city_data)=> 
//             {cityData =  city_data})
//         })
//         console.log(cityRoute)
//         console.log(cityData)
//     // const servingAreas = cityData.internalLinks.servingAreas;    
//     return {
//         props:{cityData,cityRoute}
//     }
// }

export default quicklinks