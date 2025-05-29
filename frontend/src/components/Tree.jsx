import React from "react";
import { useState, useEffect} from 'react';
import '../styles/tree.css';
import api from '../api'


const url = "http://127.0.0.1:8000"

function Tree(){
  let access_token;

  access_token = localStorage.getItem("access");
  const [dados, setDados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState([]);
  const [site, setSite] = useState([]);
  const [revision, setRevision] = useState([]);
  
const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
      try {
        const response = await api.get(`${url}/tree`, {
          params: {site},
          headers:{revision}
        });
        setDados(response.data);
        setErro(null) 
      } catch (err) {
        setErro(err.message || 'Erro');
      } finally {
        setLoading(false);
      }
    }

  return (
    <div>
    <div className="wrapper">
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h1>Submit the site and revision number</h1>
          <div className="form-group">
            <label className='form-label'>Site</label>
            <input required className="inputValue" value={site} type="text" placeholder="site" onChange={(e) => setSite(e.target.value)}/>
          </div>
          <div className="form-group">
            <label className='form-label'>Revision</label>
            <input required className="inputValue" value={revision} type="text" placeholder="revision" onChange={(e) => setRevision(e.target.value)}/>
          </div>
      <button className='form-btn' type="submit">Submit</button>
    </form>
    </div>
      {!loading && !erro &&(
        <div className="dados-container">
          <h1>Retrieve Tree</h1>
          <pre className="result"> {dados?.tree
        ? dados.tree
            .map(obj => Object.entries(obj).map(([k, v]) => `${k}: ${v}`).join('\n'))
            .join('\n\n')
        : "Sem dados ainda"}</pre>
      </div>
      )
      }
  </div>
</div>

  )
}


export default Tree;