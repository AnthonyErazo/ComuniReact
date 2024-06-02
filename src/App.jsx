import styles, { layout } from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Hero } from "./components";
import Services from "./components/Services"
import { questions1, questions2 } from "./constants";
import Testimonials from "./components/Testimonials";
import { Link, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import DashboardLayout from "./components/DashboardLayout";
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

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />} />
    <Route path="/groups" element={<MainGroups />} />
    <Route path="/groups/:id" element={<MainGroup />} />

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
