import { useRouter } from "next/router";

const City = () => {
    const router = useRouter();
    const {city} = router.query;
    return <p style={{fontSize : "3rem"}}>welcome to the {city} page</p>
}

export default City