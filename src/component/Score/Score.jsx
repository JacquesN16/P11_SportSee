import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import './Score.scss'
import PropTypes from "prop-types";

/**@function  display score as a pie chat
 * @component
 * @param {number } userId
 * @returns( <Score/>)
 */

export function Score  (props)  {
    return (
        <div className="score">
            <header className="score-header">
                <h1>Score</h1>
            </header>
            <div className="score-chart">
                <PieChart width={250} height={250}>
                    <Pie
                        data={[{ value: props.completionScore }, { value: 1 - props.completionScore }]}
                        dataKey="value"
                        innerRadius={70}
                        outerRadius={80}
                        startAngle={90}
                        endAngle={450}
                        fill="transparent"
                        stroke="transparent"
                    >
                        <Cell fill="#E60000" />
                        <Cell fill="white" />

                    </Pie>
                </PieChart>
                <div className="score-info">
                    <div className="score-value">{props.completionScore * 100}%</div>
                    <div className="score-text">de votre</div>
                    <div className="score-text">objectif</div>
                </div>
            </div>
        </div>
    )
}

Score.propTypes = {
    userId: PropTypes.number,
}
