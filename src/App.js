import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LikePage from "./pages/LikePage";
import Home from "./pages/Home";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/coups-de-coeur" element={<LikePage />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
