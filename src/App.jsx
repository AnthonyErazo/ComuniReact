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

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />} />
    <Route path="/groups" element={<MainGroups />} />
    <Route path="/groups/:gid" element={<MainGroup />} />

    <Route element={<PublicRouter />}>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Route>

    <Route path="/dashboard" element={<PrivateRouter />}>
      <Route element={<DashboardLayout />}>
        <Route path="inicio" element={<Dashboard />} />
        <Route path="myGroup" element={<MyGroup />} />
        <Route path="myNotices" element={<Notices />} />
        <Route path="groups/allGroups" element={<AllGroups />} />
        <Route path="groups/allNotices" element={<AllNotices />} />
        <Route path="profile" element={<Profile />} />
        <Route path="users" element={<Users />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    </Route>
  </Routes>
);

export default App;
