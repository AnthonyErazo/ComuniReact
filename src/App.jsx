import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./components/Dashboard";
import Messages from "./components/Messages";
import MyGroup from "./components/MyGroup";
import Notices from "./components/Notices";
import Users from "./components/Users";
import AllGroups from "./components/AllGroups";
import AllNotices from "./components/AllNotices";
import Profile from "./components/Profile";
import MainGroups from "./components/MainGroups";
import MainGroup from "./components/MainGroup";
import Register from "./components/Register";
import Login from "./components/Login";
import DashboardLayout from "./components/DashboardLayout";
import PublicRouter from "./router/PublicRouter";
import PrivateRouter from "./router/PrivateRouter";
import { AuthProvider } from "./context/AuthContext";
import UserRoute from "./router/UserRouter";
import AdminRoute from "./router/AdminRouter";

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />} />
    <Route path="/groups" element={<MainGroups />} />
    <Route path="/groups/:gid" element={<MainGroup />} />

    <Route element={<AuthProvider />}>
      <Route element={<PublicRouter />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/dashboard" element={<PrivateRouter />}>
        <Route element={<DashboardLayout />}>
          <Route element={<UserRoute />}>
            <Route path="inicio" element={<Dashboard />} />
            <Route path="myGroup" element={<MyGroup />} />
            <Route path="myNotices" element={<Notices />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route element={<AdminRoute />}>
            <Route path="groups/allGroups" element={<AllGroups />} />
            <Route path="groups/allNotices" element={<AllNotices />} />
            <Route path="users" element={<Users />} />
            <Route path="messages" element={<Messages />} />
          </Route>
        </Route>
      </Route>

    </Route>


  </Routes>
);

export default App;
