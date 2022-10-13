import { useRouter } from "next/router";
import CityHero from "../../components/CityHero";
import Main from "../../components/Main";
import SpareParts from "../../components/SpareParts"
import Brands from "../../components/Brands"
import Faq from "../../components/Faq"
import Reviews from "../../components/Reviews";



const City = () => {
    const router = useRouter();
    const { city } = router.query;
    return (
        <div>
            <CityHero />
            <Main />
            <SpareParts />
            <Brands />
            <Faq />
            <Reviews />
        </div>
    )
}

export default City