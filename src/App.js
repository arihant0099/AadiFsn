import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
};

export default App;
