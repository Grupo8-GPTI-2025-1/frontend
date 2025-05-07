'use client';

export default function DashboardPage() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Property Broker</h1>
      </header>
      <main style={styles.main}>
        <p>Welcome to the dashboard!</p>
        {/* Add your dashboard components here */}
      </main>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    backgroundColor: '#0070f3',
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
