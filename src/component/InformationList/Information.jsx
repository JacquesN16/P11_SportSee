import React from 'react'
import './Information.scss'


export default function Information (props) {
    return (
        <div className="information">
            {props.icon}
            <div>
                <span className="info-value"> {props.value}</span>
                <span className="info-title"> {props.title}</span>
            </div>
        </div>
    )
}


