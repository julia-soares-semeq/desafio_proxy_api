import React from "react";
import { useState, useEffect} from 'react';
import '../styles/usercorp.css';
import api from '../api'


const url = "http://127.0.0.1:8000"

function InfoAtivos(){
  let access_token;

  access_token = localStorage.getItem("access");
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [site, setSite] = useState([]);
  const [id, setId] = useState([]);
  const [erro, setErro] = useState([]);
  
const handleSubmit = async (e) => {
    e.preventDefault();
      try {
        const response = await api.get(`${url}/info`, {
          params: {site},
          headers:{id},
        });
        setDados(response.data); 
        setErro(null);
      } catch (err) {
        setErro(err.message || 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }

  return (
    <div>
    <div className="wrapper">
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label className='form-label'>Site</label>
          <input className="inputValue" value={site} type="text" placeholder="site" onChange={(e) => setSite(e.target.value)}/>
          </div>
          <div className="form-group">
          <label className='form-label'>ID</label>
          <input className="inputValue" value={id} type="text" placeholder="id" onChange={(e) => setId(e.target.value)}/>
          </div>
      <button className='form-btn' type="submit">Submit</button>
    </form>
    </div>
    </div>
    <div className="dados-container">
    <h1>Retrieve Asset Info</h1>
     {!loading && !erro &&(
    <pre>{dados?.asset_info && dados.asset_info.length > 0 ? JSON.stringify(dados.asset_info[0], null, 6) : "Sem dados ainda"}</pre>)}
    </div>
  </div>
  )
}


export default InfoAtivos;