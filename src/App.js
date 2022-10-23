import './App.css';
import Navbar from "./component/Navbar/Navbar";
import {Router, Routes} from "react-router";
import {SideBar} from "./component/SideBar/SideBar";

export default function App() {
  return (
    <div className="App">
        <Navbar/>
        <div style={{ display: 'flex' }}>
            <SideBar />
        </div>
        <Routes>
        </Routes>
    </div>
  );
}


