import './App.css';
import Navbar from "./component/Navbar/Navbar";
import {Router, Routes} from "react-router";
import {SideBar} from "./component/SideBar/SideBar";
import {Route} from "react-router-dom";
import {UserList} from "./app/01.UserList/UserList";
import Container from "./container/Container";

export default function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Container />} >
                <Route index element={<UserList />} />
            </Route>
        </Routes>
    </div>
  );
}


