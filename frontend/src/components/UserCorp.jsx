import React from "react";
import { useState, useEffect} from 'react';
import '../styles/usercorp.css';
import api from '../api'


const url = "http://127.0.0.1:8000"

function UserCorp(){
  let access_token;

  access_token = localStorage.getItem("access");
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState([]);
  
  useEffect(() => {
    async function fetchDados() {
      try {
        const response = await api.get(`${url}/usercorp`);
        setDados(response.data); 
        setErro(null) 
      } catch (err) {
        setErro(err.message || 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }
    fetchDados();
  }, []);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
    <div className="wrapper">
      <h1>Retrieve User Data</h1>
      <div className="dados-container">{Object.entries(dados).map(([k, v])=>(
         <p key={k}><strong>{k}:</strong> {typeof v === 'object'? JSON.stringify(v): String(v)}</p>
      ))}</div>
    </div>
  </div>
  )
}


export default UserCorp;