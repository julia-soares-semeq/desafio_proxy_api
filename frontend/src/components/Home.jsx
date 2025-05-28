import React from "react";
import { useState } from 'react';
import '../styles/home.css';
import { useNavigate } from "react-router-dom";


function Home(){
    const navigate = useNavigate();
  return (
    <div className="home-container ">
        <h1 className="titulo">Bem-vindo!</h1>
        <div className="button-grid">
             <button onClick={() => navigate('/usercorp')}>Retrieve User Data</button>
             <button onClick={() => navigate('/tree')}>Retrieve Tree</button>
             <button onClick={() => navigate('/info')}>Retrieve Asset Info</button>
        </div>
    </div>
  )
}


export default Home;