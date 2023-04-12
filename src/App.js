import React from "react";
import Main from "./Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Callback from "./Comp/Callback";
import Header from "./Comp/Header";
import Footer from "./Comp/Footer";

import Showroom from "./Comp/Showroom";
import Singlecar from "./Comp/Singlecar";

import './App.css';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/callback" element={<Callback/>}/>
        <Route path="/showroom" element={<Showroom/>}/>
        <Route path="/singlecar" element={<Singlecar/>}/>

      </Routes>
    <Footer/>

    </BrowserRouter>
  );
}

export default App;
