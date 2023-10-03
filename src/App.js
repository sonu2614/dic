import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import History from "./Components/History";
import { Routes, Route } from "react-router-dom";
import HistoryWord from "./Components/HistoryWord";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route path="" element={<Home />} />
                    <Route path="history" element={<History />} />
                    <Route path="/word/:word" element={<HistoryWord />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
