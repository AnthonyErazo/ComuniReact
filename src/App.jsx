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

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />} />

    <Route path="/dashboard">
      <Route path="">
        <Route path="inicio" element={<Dashboard />} />
        <Route path="myGroup" element={<MyGroup />} />
        <Route path="myNotices" element={<Notices />} />
      </Route>
      <Route path="groups">
        <Route path="allGroups" element={<AllGroups />} />
        <Route path="allNotices" element={<AllNotices />} />
      </Route>
      <Route path="profile" element={<Profile />} />
      <Route path="users" element={<Users />} />
      <Route path="messages" element={<Messages />} />
    </Route>
  </Routes>
);

export default App;
