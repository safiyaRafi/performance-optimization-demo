import { useEffect } from 'react';

function HeavyComponent() {
  // Simulate a heavy task
  useEffect(() => {
    const start = performance.now();
    while (performance.now() - start < 2000) {} // 2s block
  }, []);

  return <p>⚙️ Heavy component loaded!</p>;
}
export default HeavyComponent;
