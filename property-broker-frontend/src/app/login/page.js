'use client';

import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import './login.css';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <>
      <Navbar />
      <main>
        <div className='container'>
        <form onSubmit={handleSubmit} className='form'>
          <h2 className='title'>Iniciar Sesión</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input'
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            required
          />

          <button type="submit" className='primary-button'>Login</button>
          <p className='lowerlink'>¿No tienes cuenta? <a href="/register" className='link'>regístrate aquí</a></p>
        </form>
        </div>
      </main>
    </>
  );
}