import React, { useEffect, useState } from 'react'

import { ReactComponent as Oval } from '../../asset/images/Oval.svg'
import './Activity.scss'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
import mainApi from "../../app/00.API/mainApi";
import Loader from "../Loader/Loader";
import PropTypes from "prop-types";


/**function display the bar chart activity
 *@component
 * @param {number} userId
 * @returns (bar chart <Activity/>)
 */

export function Activity (props) {
    const [data, setData] = useState()


    /**@function display custom tooltip on mouse hover
     *
     * @param {*} param0
     * @returns (custom tooltip)
     */
    const CustomTooltip = ({ active, payload }) => {
        return active && payload ? (
            <div className="tool-tip">
                <div className="poids">{`${payload[0].value} Kg`}</div>
                <div className="calories">{`${payload[1].value} KCal`}</div>
            </div>
        ) : null
    }

    /**@function get day number of a week
     *
     * @param {string} date
     * @returns {number} of day
     */
    const getDayNumber = (date) => {
        const objetDate = new Date(date)
        return objetDate.getDate()
    }


    /**@function get data for user activity
     *
     * @param {number} id
     * @returns data
     */
    const getUserActivity = async (id) => {
        if(!id){
            return
        }

        try{
            const res = await mainApi.getUserActivity(id)
            setData(res.data.sessions)
        } catch (err) {
            console.log(err)
            alert('Error')
        }
    }

    useEffect(() => {

        getUserActivity(props.userId)

    }, [props.userId])

    if (!data) {
        return <Loader isLoading={true}/>
    }

    return (
        <div className="activity">
            <header className="card-header">
                <h3>Activité quotidienne</h3>
                <div className="card-indicator">
                    <div className="card-infos">
                        <Oval fill="#282D30" />
                        <span> Poids (kg)</span>
                    </div>
                    <div className="card-infos">
                        <Oval fill="#E60000" />
                        <span> Calories brûlées (kCal)</span>
                    </div>
                </div>
            </header>
            <ResponsiveContainer aspect={4}>
                <BarChart
                    data={data}
                    barGap={8}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid horizontal="true" vertical="" />
                    <XAxis
                        dataKey="day"
                        dx={-10}
                        dy={1}
                        axisLine={false}
                        tickLine={false}
                        tickFormatter={getDayNumber}
                    />
                    <YAxis
                        dataKey="calories"
                        axisLine={false}
                        tickLine={false}
                        orientation="right"
                    />

                    <Tooltip content={CustomTooltip} />
                    <Bar
                        dataKey="kilogram"
                        fill="#282D30"
                        barSize={7}
                        radius={[50, 50, 0, 0]}
                    />

                    <Bar
                        dataKey="calories"
                        fill="#E60000"
                        barSize={7}
                        radius={[50, 50, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

Activity.propTypes = {
    userId: PropTypes.number,
}
