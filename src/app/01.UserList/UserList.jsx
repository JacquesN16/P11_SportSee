import React from 'react'
import { ReactComponent as SportSeeLogo } from '../../component/Navbar/SportSeeLogo.svg'
import './UserList.scss'
import { Link } from 'react-router-dom'

export function  UserList () {


    return (
        <div className="user-list">
            <SportSeeLogo className="logo-page" />
            <Link to="./user/12" className="user">
                <h2>Karl Dovineau</h2>
            </Link>
            <Link to="user/18" className="user">
                <h2>Cecilia Ratorez</h2>
            </Link>
        </div>
    )
}

