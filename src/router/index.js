import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import NotFind from "../components/NotFind";
import AppLayout from "../components/Layout";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AppLayout><Login /></AppLayout>} />
                <Route path="/home" element={<AppLayout><Home /></AppLayout> }/>
                <Route path="/profile/:username" element={<AppLayout><Profile /></AppLayout>} />
                <Route path="*" element={<AppLayout><NotFind /></AppLayout>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;