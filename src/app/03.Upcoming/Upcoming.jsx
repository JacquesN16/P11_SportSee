import React from 'react'
import './Upcoming.scss'
import { ReactComponent as Progress } from '../../asset/images/Progress.svg'
import {route} from "../../constant/route";
/**@function display as a replacement for upcoming page
 *
 * @returns  (<Upcoming/>)
 */

export default function Upcoming () {

    return (
        <div className="progress-page">
            <Progress />
            <div className="progress-text">Arrive bientôt</div>
            <div className="">
                <a href={route.home}> Retourne a l'accueil</a>
            </div>
        </div>
    )
}

