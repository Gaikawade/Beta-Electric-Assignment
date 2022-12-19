import React from "react";
import Home from "./Components/Home";
import Fav from "./Components/Fav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="fav" element={<Fav />}></Route>
            </Routes>
        </BrowserRouter>
    );
}
