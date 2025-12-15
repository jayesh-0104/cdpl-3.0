'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: '#333' }}>Something went wrong!</h2>
        <p style={{ color: '#666' }}>{error.message}</p>
        <button onClick={reset} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#0070f3', color: 'white', border: 'none', borderRadius: '4px' }}>Try again</button>
      </div>
    </div>
  );
}