import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import NotFind from "../components/NotFind";
import { useEffect, useState } from "react";
import SignupPage from "../pages/Signup";
import {
    auth,
    onAuthStateChanged
} from "./firebase.js";
import { Spin } from "antd";
import AppLayout from "../components/AppLayout.jsx";
import AuthLayout from "../components/Layout.jsx";
import SettingsTasks from "../pages/Settings/SettingsTasks.jsx";
import SettingsMessages from "../pages/Settings/SettingsMessages.jsx";
import LoginPage from "../pages/Login";
import SettingsPage from "../pages/Settings.jsx";
import UsersPage from "../pages/Users.jsx";

const AppRouter = () => {
    const [isUser, setIsUser] = useState(false);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("user", user, auth)
            if (user) {
                setIsUser(true);
            } else {
                setIsUser(false);
            }
            setLoader(false);
        })
    }, [])
    return (
        <>
            {loader
                ?
                <div className="d-flex align-items-center justify-content-center vh-100">
                    <Spin tip="Loading" size="large" />
                </div>
                :
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={isUser ? <Navigate to={"/profile/:username"} /> : <AuthLayout><LoginPage /></AuthLayout>} />
                        <Route path="/signup" element={isUser ? <Navigate to={"/profile/:username"} /> : <AuthLayout><SignupPage /></AuthLayout>} />
                        <Route path="/home" element={<AppLayout><Home /></AppLayout>} />
                        <Route path="/profile/:username" element={isUser ? <AppLayout><Profile /></AppLayout> : <Navigate to={"/"} />} />
                        <Route path="*" element={<AppLayout><NotFind /></AppLayout>} />
                        <Route path="/settings" element={<AppLayout><SettingsPage /></AppLayout>}>
                            <Route path="messages" element={<SettingsMessages />} />
                            <Route path="tasks" element={<SettingsTasks />} />
                        </Route>
                        <Route path="/users" element={isUser ? <AppLayout><UsersPage /></AppLayout> : <Navigate to={"/"} />} />
                    </Routes>
                </BrowserRouter>}
        </>
    )
}

export default AppRouter;