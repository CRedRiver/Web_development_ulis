import { useState } from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import './App.css'
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/Login.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import PrivateLayout from './layouts/PrivateLayout';
import HomeLayouts from './layouts/HomeLayout/index.jsx';
import Personal from './pages/Personal/Personal.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route element={<HomeLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route path="/home" element={<MainPage />} />
          <Route path='/profile' element={<Personal />} />
        </Route>

      </Routes>
    </>
  );
}

export default App
