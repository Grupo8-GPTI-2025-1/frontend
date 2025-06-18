'use client';

import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <>
      {/* barra arriba */}
      <Navbar />
      {/* cuerpo centrado */}
      <main style={styles.container}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2 style={styles.title}>Iniciar Sesión</h2>

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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>Login</button>
          <p style={styles.lowerlink}>¿No tienes cuenta? <a href="/register" style={styles.link}>regístrate aquí</a></p>
        </form>
      </main>
    </>
  );
}

/* ——— estilos inline: OK para demo rápida ——— */
const styles = {
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
  input: {
    padding: '0.75rem',
    marginBottom: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#6f32e0',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '1rem',
    cursor: 'pointer',
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



// 'use client';

// import { useState } from 'react';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate login logic
//     alert(`Email: ${email}\nPassword: ${password}`);
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <h2 style={styles.title}>Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={styles.input}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={styles.input}
//           required
//         />
//         <button type="submit" style={styles.button}>Login</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f2f2f2',
//   },
//   form: {
//     backgroundColor: '#fff',
//     padding: '2rem',
//     borderRadius: '8px',
//     boxShadow: '0 0 10px rgba(0,0,0,0.1)',
//     width: '300px',
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   title: {
//     marginBottom: '1rem',
//     textAlign: 'center',
//   },
//   input: {
//     padding: '0.75rem',
//     marginBottom: '1rem',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//   },
//   button: {
//     padding: '0.75rem',
//     backgroundColor: '#6f32e0',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     fontSize: '1rem',
//     cursor: 'pointer',
//   }
// };
