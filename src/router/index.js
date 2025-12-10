import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import NotFind from "../components/NotFind";
import AppLayout from "../components/Layout";
import { useState } from "react";
import SignupPage from "../pages/Signup";

const AppRouter = () => {
    const [auth, setAuth] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={auth ? <Navigate to={"/profile/:username"} /> : <AppLayout><Login /></AppLayout>} />
                <Route path="/signup" element={auth ? <Navigate to={"/profile/:username"} /> : <AppLayout><SignupPage /></AppLayout>} />
                <Route path="/home" element={<AppLayout><Home /></AppLayout> }/>
                <Route path="/profile/:username" element={<AppLayout><Profile /></AppLayout>} />
                <Route path="*" element={<AppLayout><NotFind /></AppLayout>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;