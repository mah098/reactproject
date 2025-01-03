import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
//import SwiggyMart from "./components/SwiggyMart";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

const SwiggyMart = lazy(() => import("./components/SwiggyMart"));

const App = () => {
    return <>
        <div className="main">
                <Header/>
                <Outlet/>
                <Footer/>
        </div>
    </>
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/swiggymart",
                element: <Suspense fallback={<Shimmer/>}>
                            <SwiggyMart/>
                        </Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
    
]);
// const heading = React.createElement("h1",{ id: "heading" }, "This is h1 element");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//root.render(<App/>)
root.render(<RouterProvider router = {appRouter} />);