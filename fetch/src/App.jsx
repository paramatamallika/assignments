import React, { useEffect, useState } from "react";

function App() {

  /* ---------------- Q1: Fetch User Data ---------------- */
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []); // Mount phase

  /* ---------------- Q2: Counter with Alert ---------------- */
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]); 

  
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    if (!showTimer) return;

    const interval = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Cleanup: Timer stopped");
    };
  }, [showTimer]); // Unmount / cleanup

  return (
    <div style={{ padding: "20px" }}>
      <h1>React useEffect Assignment</h1>

      {/* Q1 Output */}
      <h2>User Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}

      <hr />

      {/* Q2 Output */}
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />

      {/* Q3 Output */}
      <h2>Lifecycle & Cleanup Demo</h2>
      <button onClick={() => setShowTimer(!showTimer)}>
        Toggle Timer Component
      </button>
      {showTimer && <p>Timer is running (check console)</p>}
    </div>
  );
}

export default App;
