import React from "react";

function HeavyComponent() {
  console.log("HeavyComponent rendered");

  // Simulate heavy UI
  let total = 0;
  for (let i = 0; i < 1_000_000; i++) {
    total += i;
  }

  return (
    <div>
      <h3>Heavy Component</h3>
      <p>This is a heavy UI section.</p>
    </div>
  );
}

export default React.memo(HeavyComponent);
