import React, { useEffect } from "react";

function Lifecycle() {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted (Cleanup)");
    };
  }, []);

  return <h3>Lifecycle Component</h3>;
}

export default Lifecycle;
