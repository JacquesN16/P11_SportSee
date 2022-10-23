import Navbar from "../component/Navbar/Navbar";
import {SideBar} from "../component/SideBar/SideBar";
import { Outlet } from 'react-router'

export default function Container () {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex' }}>
                <SideBar />
                <Outlet />
            </div>
        </>
    )
}
