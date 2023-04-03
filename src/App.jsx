import React from "react";
import { HomePage } from "./pages";
import './App.css'
import { Footer, Navbar } from "./components";
import { Alert } from "./components";

const App = () => {
    return (
        <>
            <Navbar />
            <HomePage />
            <Footer />
            <Alert />
        </>
    )
};

export default App;