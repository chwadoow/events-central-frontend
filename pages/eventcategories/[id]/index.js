import {useRouter} from "next/router"
function event(){
    const router = useRouter()
    const {id} = router.query
    return (
        <>
        <h1>Fetching of events and mapping them {id}</h1>
        </>      
    )
    }
export default event