import { useState, Suspense, lazy } from 'react';
import LightComponent from './components/LightComponent';

// Lazy load the heavy component
const HeavyComponent = lazy(() => import('./components/HeavyComponent'));

function App() {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 Performance Optimization Demo</h1>
      <LightComponent />
      <button onClick={() => setShowHeavy(!showHeavy)}>
        {showHeavy ? 'Hide' : 'Load'} Heavy Component
      </button>

      <Suspense fallback={<p>Loading component...</p>}>
        {showHeavy && <HeavyComponent />}
      </Suspense>
    </div>
  );
}

export default App;
