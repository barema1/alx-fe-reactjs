import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        Current Count: {count}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '0.5rem', padding: '0.5rem 1rem' }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{
          margin: '0.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'tomato',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
