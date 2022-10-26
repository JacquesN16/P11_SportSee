import {useEffect, useState} from "react";
import './loader.scss'


export default function Loader (props) {
    const [isSpin, setIsSpin] = useState(false)

    useEffect(()=>{
        setIsSpin(props.isLoading)
    },[props.isLoading])

    return(
        <>
            {isSpin && <div className="loading-spinner">
            </div>}
        </>
    )
}
