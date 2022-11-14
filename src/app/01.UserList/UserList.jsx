import React, {useState} from 'react'
import './UserList.scss'
import { Link } from 'react-router-dom'
import {route} from "../../constant/route";


/**@function display user list
 *
 * @returns (<UserList/>)
 */

export function  UserList () {
    const USER_LIST = [
        {
            id: 12,
            firstName: "Karl",
            lastName: "Dovineau"
        },
        {
            id: 18,
            firstName: "Cecilia",
            lastName: "Ratorez"
        }
    ]

    return (
        <div className="user-list">
            <div className="user-list-card">
                <div className="user-list-title">
                    <h2>Selectionez votre profil</h2>
                </div>

                <div className="user-list-item-container">
                    {USER_LIST && USER_LIST.map((user,idx)=>{
                        return(
                         <div key={idx} className="user-list-item">
                            <Link to={`${route.user}/${user.id}`} className="user">
                                <h2>{user.firstName} {user.lastName}</h2>
                            </Link>
                        </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

