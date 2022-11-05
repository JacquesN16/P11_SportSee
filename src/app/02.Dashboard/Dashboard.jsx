import React, { useEffect, useState } from 'react'
import './Dashboard.scss'
import {useNavigate, useParams} from 'react-router'
import mainApi from "../00.API/mainApi";
import {Activity} from "../../component/Activity/Activity";
import DurationSessions from "../../component/DurationSession/DurationSessions";
import InformationList from "../../component/InformationList/InformationList";
import {Score} from "../../component/Score/Score";
import Performance from "../../component/Performance/Performance";
import {defaultData} from "./defaultData";

export default function Dashboard (){
    const params = useParams()
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState(defaultData.data)
    const [completionScore, setCompletionScore] = useState(defaultData.data.todayScore)

    const getUserByID = async (id) => {
        if(!id){
            return
        }

        try{
            const res = await mainApi.getUserByID(id)
            if (res) {
                setUserInfo(res.data)
                setCompletionScore(res.data.todayScore ? res.data.todayScore : res.data.score)
            }
        } catch (err) {
            console.log(err)
            navigate('/404')
        }
    }

    useEffect(() => {
        getUserByID(params.id)
    }, [params.id])

    return (<>

        <main className="main-container">
                <section className="profile">
                    <h1>
                        Bonjour <span>{userInfo?.userInfos.firstName}</span>
                    </h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </section>
                <section className="container">
                    <article className="container-chart">
                        <Activity userId={userInfo?.id} />
                        <div className="cards-info">
                            <DurationSessions userId={userInfo?.id} />
                            <Performance userId={userInfo?.id} />
                            <Score userId={userInfo?.id} completionScore={completionScore} />
                        </div>
                    </article>
                    <article className="container-information">
                        <InformationList
                            calorie={userInfo?.keyData.calorieCount}
                            protein={userInfo?.keyData.proteinCount}
                            glucoside={userInfo?.keyData.carbohydrateCount}
                            lipid={userInfo?.keyData.lipidCount}
                        />
                    </article>
                </section>
            </main>
    </>

    )
}


