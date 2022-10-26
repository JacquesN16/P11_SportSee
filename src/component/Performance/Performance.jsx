import React, { useEffect, useState } from 'react'
import './Performance.scss'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import mainApi from "../../app/00.API/mainApi";
import Loader from "../Loader/Loader";

const ACTIVITY_TYPE = {
    1: 'Intensité',
    2: 'Vitesse',
    3: 'Force',
    4: 'Endurance',
    5: 'Energie',
    6: 'Cardio',
}



export default function Performance (props)  {

    const [data, setData] = useState()
    const [activityType, setActivityType] = useState([])

    const getActivityType = (activityId) => {
        if(!activityType){
            return
        }
        return activityType[activityId]
    }


    const getUserPerformance = async(id) =>{
        if(!id){
            return
        }

        try{
            const res = await mainApi.getUserPerformance(id)

            setData(res.data.data)
            setActivityType(res.data.kind)
        } catch(err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getUserPerformance(props.userId)
    }, [props.userId])

    if (!data) return <Loader isLoading={true}/>

    return (
        <RadarChart
            className="radar-chart"
            cx={130}
            cy={130}
            outerRadius={90}
            width={250}
            height={250}
            data={data}
            dy={5}
            stroke="#FFFFFF"
        >
            <PolarGrid radialLines={true} d={1} />
            <PolarAngleAxis
                className="text-information"
                stroke="white"
                dataKey="kind"
                domain={[0, 250]}
                axisLine={false}
                tickCount={6}
                tickFormatter={getActivityType}
            />

            <Radar dataKey="value" stroke="none" fill="red" fillOpacity={0.6} />
        </RadarChart>
    )
}


