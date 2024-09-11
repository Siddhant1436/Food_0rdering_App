import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { BrowserRouter, Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact  from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";

const AppLayout = () => {
    return(
      <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element:<AppLayout/>,
        children: [
            {
                path:'/',
                element:<Body/>,
            },
            {
                path: '/about',
                element:<About/>,
            },

            {
                path: '/contact',
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element: <ResMenu/>,
            }  
        ],
        errorElement: <Error/>,
    },

])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);