import Head from 'next/head'
import styles from "../../styles/[city].module.css"
import CityHero from "../../components/CityHero";
import Main from "../../components/Main";
import SpareParts from "../../components/SpareParts"
import Brands from "../../components/Brands"
import Faq from "../../components/Faq"
import Reviews from "../../components/Reviews";
import Links from "../../components/Links"
import Ro_common from "../../JSON/RO-common.json"
import Ro_routes from "../../JSON/RO-routes.json"

// export const getStaticPaths = () => {
//     let found=0;
//     const paths = Ro_common.map((city) => {
//         return {
//             params: { city: city.serviceZone.toString() }
//         }
//     })
//     const cityPaths = Ro_routes.map((city) => {
//         return {
//             params: { city: city.path.slice(1)}
//         }
//     })

//     let cityNames = Ro_common.map((city) => city.serviceZone)
//     cityNames.map((cityName)=>{
//         cityPaths.map((data) => {
//             if (data.params.city.toString().includes(cityName)) {
//                 found = found++;
//             }
//         })
//     })

//     if (found = 0) {
//         return {
//             paths: cityPaths,
//             fallback: false
//         }
//     }
//     else{
//         return {
//             paths: paths,
//             fallback: false
//         }
//     }

// }

// export const getStaticProps = (context) => {
//     const cityPath = context.params.city
//     let zone, cityRoute;
//     let cityData = Ro_common.filter((city) => city.serviceZone == cityPath)
//     if (cityData.length > 0) {
//       cityRoute = Ro_routes.filter((city) => city.zoneId == cityPath)
//     }
//     else {
//       Ro_routes.map((city) => {
//         if (city.path == cityPath) {
//           zone = city.zoneId;
//         }
//       })
//       cityData = Ro_common.filter((city) => city.serviceZone == zone)
//     }
//     return {
//         props: { cityData,cityRoute},
//         revalidate: 30,
//     }
// }

export const getServerSideProps =  (context) => {
    const cityPath = context.params.city
    // console.log(cityPath)
    let zone, cityRoute;
    let cityData =  Ro_common.filter((city) => city.serviceZone == cityPath)
    // console.log(cityData)
    if (cityData.length > 0) {
        cityRoute = Ro_routes.filter((city) => city.zoneId == cityPath)
    }
    else {
        Ro_routes.map((city) => {
            if (city.path.slice(1) == cityPath) {
                zone = city.zoneId;
                cityRoute = [city];
            }
        })
        cityData = Ro_common.filter((city) => city.serviceZone == zone)
    }
    return {
        props: { cityData, cityRoute }
    }
}


const City = (props) => {
    // console.log(props)
    let { cityData, cityRoute } = { ...props }
    

    return (
        <div>
            <Head>

                <title>{cityRoute.meta_title}</title>
                <meta charset="utf-8"></meta>
                <meta name="description" content={cityRoute.meta_description}></meta>
            </Head>
            <CityHero {...props} />
            <Main cityData={cityData} cityRoute={cityRoute} />
            <SpareParts cityData={cityData} cityRoute={cityRoute} />
            <Brands cityData={cityData} cityRoute={cityRoute} />
            <Faq cityData={cityData} cityRoute={cityRoute} />
            <Reviews cityData={cityData} cityRoute={cityRoute} />
            <Links cityData={cityData} cityRoute={cityRoute} />


        </div>
    )
}

// export const getStaticProps = () => {
//     const citydata = Ro_common

//     return {
//         props: {
//             cityData : citydata
//         }
//     }
// }


export default City

