import './App.css';
import {Router, Routes} from "react-router";
import {Route} from "react-router-dom";
import {UserList} from "./app/01.UserList/UserList";
import Container from "./container/Container";
import Dashboard from "./app/02.Dashboard/Dashboard";
import {route} from "./constant/route";
import Upcoming from "./app/03.Upcoming/Upcoming";
import ErrorPage from "./app/04.ErrorPage/ErrorPage";

export default function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Container/>} >
                <Route index element={<UserList/>} />
                <Route path={`${route.user}/:id`} element={<Dashboard/>} />
                <Route path={route.setting} element={<Upcoming />} />
                <Route path={route.community} element={<Upcoming />} />
                <Route path={route.yoga} element={<Upcoming />} />
                <Route path={route.swimming} element={<Upcoming />} />
                <Route path={route.biking} element={<Upcoming />} />
                <Route path={route.bodyBuilding} element={<Upcoming />} />
                <Route path={route.profil} element={<Upcoming />} />
                <Route path='*' element={<ErrorPage />} />

            </Route>
        </Routes>
    </div>
  );
}


