import React, {useState} from 'react'
import './UserList.scss'
import { Link } from 'react-router-dom'
import {route} from "../../constant/route";

export function  UserList () {
    const [userName, setUserName] = useState('')

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

                <div className="user-list-form">
                    <label><h2>Entrez votre nom </h2></label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e)=>setUserName(e.target.value)}
                    />
                </div>
                <div className="user-list-item-container">
                    <div className="user-list-title">
                        <h4>Selectionez votre profil</h4>
                    </div>
                    {USER_LIST && USER_LIST.map((user,idx)=>{
                        return(<>
                            {userName.toLowerCase() === user.firstName.toLowerCase()
                                && <div className="user-list-item">
                                    <Link to={`${route.user}/${user.id}`} className="user">
                                        <h2>{user.firstName} {user.lastName}</h2>
                                    </Link>
                                </div>}
                        </>)
                    })}
                </div>

            </div>
        </div>
    )
}

