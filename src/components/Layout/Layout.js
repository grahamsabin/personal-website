import React from "react";
import Navbar from "./Navigation/Navigation";
import Footer from "./footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Layout ({ children }) {
        return (
            <div className="layout">
                <Navbar/>
                    {children}
                <Footer/>
            </div>
        )
}
