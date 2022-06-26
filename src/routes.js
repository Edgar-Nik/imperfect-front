import { Routes, Route } from "react-router-dom";
import AdminAdd from "./pages/AdminAdd";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Partnership from "./pages/Partnership";
import Search from "./pages/Search";
import Strategy from "./pages/Strategy";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/add" exact element={<AdminAdd />} />
      <Route path="/partnership" element={<Partnership />} />
      <Route path="/strategy" element={<Strategy />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/search/:category" element={<Search />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
