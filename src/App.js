import './App.css';
import {Router, Routes} from "react-router";
import {Route} from "react-router-dom";
import {UserList} from "./app/01.UserList/UserList";
import Container from "./container/Container";
import Dashboard from "./app/02.Dashboard/Dashboard";
import {route} from "./constant/route";

export default function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Container/>} >
                <Route index element={<UserList/>} />
                <Route path={`${route.user}/:id`} element={<Dashboard/>} />
            </Route>
        </Routes>
    </div>
  );
}


