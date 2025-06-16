'use client';
import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import './register.css';

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // Aquí podrías enviar los datos al backend
    console.log({ username, email, password });
  };

  return (
    <>
    <Navbar />
    <div className='container'>
    <form onSubmit={handleSubmit} className='form'>
        <h2 className='title'>Registrar nueva cuenta</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='input'
        required
      />

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
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='input'
        required
      />

      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className='input'
        required
      />

      <button type="submit" className='primary-button'>Registrarse</button>
    <p className='lowerlink'>¿Ya tienes una cuenta registrada? <a href="/login" className='link'>inicia sesión aquí</a></p>

    </form>
    </div>
    </>
  );
}
