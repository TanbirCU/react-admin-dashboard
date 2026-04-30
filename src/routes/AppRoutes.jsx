import { BrowserRouter,Routes,Route } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Users from "../pages/Users/Users";
import Courses from "../pages/Courses/CourseList";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="courses" element={<Courses />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;