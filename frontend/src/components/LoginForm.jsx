import { useState } from 'react';
import '../styles/form.css';
import { useNavigate } from 'react-router-dom';

const url = "http://127.0.0.1:8000";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      if (!response.ok) {
        if (response.status === 401) {
          setError("Usuário ou senha incorretos.");
        } else {
          setError("Erro ao fazer login.");
        }
        return;
      }

      const data = await response.json();

      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);

      navigate("/home"); 
    } catch (error) {
      console.error("Erro:", error);
      setError("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="form-wrapper">
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <label className='form-label'>Username</label>
      <input value={username} type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
      
      <label className='form-label'>Password</label>
      <input value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      <div className='btn'>
      <button className='form-btn' type="submit">Submit</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
    </div>
  </div>
  );
}

export default LoginForm;
