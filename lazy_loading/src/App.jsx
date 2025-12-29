import { useState, lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>React.memo & Lazy Loading Demo</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <Suspense fallback={<p>Loading heavy component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
