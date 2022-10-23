import React from 'react'
import './SideBar.scss'
import { ReactComponent as YogaIcon } from '../../asset/images/YogaIcon.svg'
import { ReactComponent as SwimIcon } from '../../asset/images/SwimIcon.svg'
import { ReactComponent as BodyBuildIcon } from '../../asset/images/BodyBuildIcon.svg'
import { ReactComponent as BycIcon } from '../../asset/images/BycIcon.svg'
import { Link } from 'react-router-dom'


export function SideBar ()  {
    return (
        <aside className="side-bar">
            <nav>
                <Link to="/yoga">
                    <YogaIcon className="icons" />
                </Link>
                <Link to="/swimming">
                    <SwimIcon className="icons" />
                </Link>
                <Link to="/bodyBuilding">
                    <BodyBuildIcon className="icons" />
                </Link>
                <Link to="/biking">
                    <BycIcon className="icons" />
                </Link>
            </nav>
            <footer>Copyright, SportSee 2020</footer>
        </aside>
    )
}


