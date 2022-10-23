import React from 'react'
import './UserList.scss'
import { Link } from 'react-router-dom'
import {route} from "../../constant/route";

export function  UserList () {


    return (
        <div className="user-list">
            <h1>Selectionez votre profil</h1>
            <Link to={`${route.user}/12`} className="user">
                <h2>Karl Dovineau</h2>
            </Link>
            <Link to={`${route.user}/18`} className="user">
                <h2>Cecilia Ratorez</h2>
            </Link>
        </div>
    )
}

