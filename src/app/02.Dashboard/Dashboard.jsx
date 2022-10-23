import React, { useEffect, useState } from 'react'
// import DurationSessions from '../components/DurationSessions/DurationSessions'
// import Performance from '../components/Performance/Performance'
import './Dashboard.scss'
// import Score from '../components/Score/Score'
import { useNavigate, useParams } from 'react-router'
// import InformationList from '../components/Information/InformationList'
import mainApi from "../00.API/mainApi";
import {Activity} from "../../component/Activity/Activity";


export default function Dashboard (){
    const params = useParams()


    const [userInfo, setUserInfo] = useState()

    const getUserByID = async (id) => {
        if(!id){
            return
        }

        try{
            const res = await mainApi.getUserByID(id)
            setUserInfo(res.data)
        } catch (err) {
            console.log('Error')
        }
    }

    useEffect(() => {

        getUserByID(params.id)
    }, [params.id])

    return (
        <main className="main-container">
            <section className="profile">
                <h1>
                    Bonjour <span>{userInfo?.name}</span>
                </h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </section>
            <section className="container">
                <article className="container-chart">
                    <Activity userId={userInfo?.id} />
                    <div className="cards-info">
                        {/*<DurationSessions userId={userInfo?.userId} />*/}
                        {/*<Performance userId={parseInt(userInfo?.userId)} />*/}
                        {/*<Score userId={userInfo?.userId} />*/}
                    </div>
                </article>
                <article className="container-information">
                    {/*<InformationList*/}
                    {/*    calorie={userInfo?.calorie}*/}
                    {/*    protein={userInfo?.protein}*/}
                    {/*    glucoside={userInfo?.glucoside}*/}
                    {/*    lipid={userInfo?.lipid}*/}
                    {/*/>*/}
                </article>
            </section>
        </main>
    )
}


