import React , {useEffect}from "react";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";

import { Signup } from "./Pages/SignupPage";
import { Sidebar } from "./Pages/Sidebar";
import Card from "./Pages/Card";
import { MailFilled } from "@ant-design/icons";
import Content from "./Pages/Content";
import MainLayout from "./Pages/MainLayout";
import { Services } from "./Pages/Services";
import Dashboard from "./Pages/Dashboard";
import { FinalCardView } from "./Pages/FinalCardView";

export const App = () => {

 //i want to show dingup page as a default page
//  useEffect(() => {
//   window.location.href = "/signup";
// }, []);

  return (
    <>
      <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Sidebar />}>
          {/* <Route path="/webcard" element={<MainLayout />} /> */}
          <Route path="/webcard" element={<Dashboard />} />
          <Route path="/webcard/details" element={<Card />} />
        <Route path="/webcard/content" element={<Content />} />
        {/* <Route path="/webcard/themes" element={<Content />} /> */}
        <Route path="/webcard/services" element={<Services />} />
        <Route path="/nftcard" element={<Content />} />
        </Route>
        <Route path="/webcard/preview" element={<FinalCardView />} />
      </Routes>
    </>
  );
};

export default App;
