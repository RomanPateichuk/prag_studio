import React from "react";
import { Route, Routes } from "react-router-dom";
import { CardWrapper } from "./components/CardWrapper/CardWrapper";
import { Cards } from "./components/Cards/Cards";
import './style.css'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cards />}></Route>
        <Route path="/:name" element={<CardWrapper />}></Route>
      </Routes>
    </>
  );
}

export default App;
