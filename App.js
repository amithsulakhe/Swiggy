import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/compoents/Header.js";
import Body from "./src/compoents/Body";
import Specialoffer from "./src/compoents/Specialoffer";
import Search from "./src/compoents/Search.js";
import Error from "./src/compoents/Error";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Location from "./src/compoents/Location";
import Reasturentinnerfetch from "./src/compoents/Reasturentinnerfetch";
import Context from "./src/compoents/Context";
import Filters from "./src/compoents/Filters";
import Overlay from "./src/compoents/Overlay";
import Infiniteloop from "./src/compoents/Infiniteloop.js";
const App = () => {
  return (
    <div className="app">
      <Context>
   
        <Header></Header>
        <Location />
        {/* <Search></Search> */}
        <Filters />
        <Overlay />
        <Outlet />
      </Context>
      {/* <Body></Body> */}
    </div>
  );
};
const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element:<Body/>
        
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/reasturent/:resid",
        element: <Reasturentinnerfetch />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}></RouterProvider>);
