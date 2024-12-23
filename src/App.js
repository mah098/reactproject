import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const App = () => {
    return <>
        <div className="main">
                <Header/>
                <Body/>
                <Footer/>
        </div>
    </>
}

// const heading = React.createElement("h1",{ id: "heading" }, "This is h1 element");
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<App/>)