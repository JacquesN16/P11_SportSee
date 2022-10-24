import React, { useEffect, useState } from 'react'
import './DurationSessions.scss'
import { LineChart, Line, XAxis, Tooltip } from 'recharts'
import {constant} from "../../constant/constant";
import mainApi from "../../app/00.API/mainApi";





export default function DurationSessions (props) {
    const [data, setData] = useState([])

    const getDay = (indexDay) => {
        return constant.days[indexDay]
    }

    const getUserAverageSession = async(id) =>{
        if(!id){
            return
        }

        try{
            const res = await mainApi.getUserAverageSession(id)
            console.log(res)
            setData(res.data.sessions)
        } catch(err){
            console.log(err)
        }

    }
    useEffect(() => {
        getUserAverageSession(props.userId)
    }, [props.userId])

    return (
        <div className="duration-session">
            <header className="durationSessions-header">
                <h1> Durée moyenne des sessions </h1>
            </header>
            <LineChart
                className="duration-chart"
                width={250}
                height={150}
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 20,
                    bottom: 0,
                }}
            >
                <XAxis
                    dataKey="day"
                    stroke="#FFF"
                    tickLine={false}
                    dy={2}
                    tickFormatter={getDay}
                />

                <Tooltip
                    content={(pointInfo) => {
                        if (!pointInfo.active) return null
                        const pointData = data.find(
                            (x) => x.day === pointInfo.label
                        )

                        return (
                            <div className="tool">
                                {pointData.sessionLength} min
                            </div>
                        )
                    }}
                />

                <Line
                    className="line-information"
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="white"
                    dot={false}
                    activeDot={{ r: 7 }}
                />
            </LineChart>
        </div>
    )
}


