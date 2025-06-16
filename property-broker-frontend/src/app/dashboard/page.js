'use client';

import Navbar from "../components/navbar/Navbar";

export default function DashboardPage() {
  return (
    <>
    <Navbar/>
    <div style={styles.container}>
      <main style={styles.main}>
        <p>Welcome to the dashboard!</p>
        {/* Add your dashboard components here */}
      </main>
    </div>
    </>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: '100',

  },
  header: {
    backgroundColor: '#6f32e0',
    padding: '1rem',
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  main: {
    flex: 1,
    padding: '2rem',
    backgroundColor: '#f5f5f5',
  },
};
