import { useEffect, useState } from 'react';
import { getHealth } from './lib/api';

export default function App() {
  const [state, setState] = useState({ loading: true, error: '', health: null });

  useEffect(() => {
    let mounted = true;

    async function loadHealth() {
      try {
        const health = await getHealth();
        if (mounted) {
          setState({ loading: false, error: '', health });
        }
      } catch (error) {
        if (mounted) {
          setState({ loading: false, error: error.message, health: null });
        }
      }
    }

    loadHealth();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem', maxWidth: 720, margin: '0 auto' }}>
      <h1>Barbershop SaaS Blueprint</h1>
      <p>Public-safe frontend baseline connected to backend health endpoint.</p>

      {state.loading && <p>Checking API health...</p>}
      {!state.loading && state.error && <p style={{ color: '#b91c1c' }}>API error: {state.error}</p>}
      {!state.loading && state.health && (
        <pre
          style={{
            background: '#f3f4f6',
            padding: '1rem',
            borderRadius: 8,
            overflowX: 'auto'
          }}
        >
          {JSON.stringify(state.health, null, 2)}
        </pre>
      )}
    </main>
  );
}
