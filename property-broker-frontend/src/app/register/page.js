'use client';
import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';

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
    <div style={styles.container}>
    <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Registrar nueva cuenta</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
        required
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
        required
      />

      <input
        type="password"
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={styles.input}
        required
      />

      <button type="submit" style={styles.button}>Registrarse</button>
    <p style={styles.lowerlink}>¿Ya tienes una cuenta registrada? <a href="/login" style={styles.link}>inicia sesión aquí</a></p>

    </form>
    </div>
    </>
  );
}

// Asegúrate de definir o importar `styles.input` y `styles.button` desde tu diccionario de estilos.
const styles = {
  input: {
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    width: '100%',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#6f32e0',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    width: '100%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'calc(100vh - 64px)',   // resta la altura del navbar
    paddingTop: '64px',                // evita que quede tapado
    backgroundColor: '#f2f2f2',
  },
  form: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: '1rem',
    textAlign: 'center',
  },
  lowerlink: {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#777',
  },
  link: {
    color: '#6f32e0',
    textDecoration: 'none',
  }
};
