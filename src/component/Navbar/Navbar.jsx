import './Navbar.scss'
import logo from './SportSeeLogo.svg'
import { Link } from 'react-router-dom'
import {route} from "../../constant/route";


export default function Navbar () {

    return (
        <div className="nav-bar">
            <div>
                <img src={logo} alt="" />
            </div>
            <Link className="nav-link" to="/">
                Acceuil
            </Link>
            <Link className="nav-link" to={route.profile}>
                Profil
            </Link>
            <Link className="nav-link" to={route.setting}>
                Réglage
            </Link>
            <Link className="nav-link" to={route.community}>
                Communauté
            </Link>
        </div>
    )
}


