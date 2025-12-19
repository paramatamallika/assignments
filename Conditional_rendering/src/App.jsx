import React, { useEffect, useState } from "react";

/* ================= Q1: Conditional Rendering ================= */
function ComponentA() {
  return <h3>Status is TRUE</h3>;
}

function ComponentB() {
  return <h3>Status is FALSE</h3>;
}

/* ================= Q3: TodoCard Component ================= */
function TodoCard({ userId, title, completed }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "8px", margin: "6px" }}>
      <p>User ID: {userId}</p>
      <p>Title: {title}</p>
      <p>Status: {completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}

/* ================= Q3: TodosList ================= */
function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.slice(0, 15));
      });

    // Cleanup
    return () => {
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}

/* ================= MAIN APP ================= */
function App() {

  /* ---------- Q1 State ---------- */
  const [status, setStatus] = useState(false);

  /* ---------- Q2 State ---------- */
  const [isRed, setIsRed] = useState(true);

  /* ---------- Q3 State ---------- */
  const [showTodos, setShowTodos] = useState(true);

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Assignment</h1>

      {/* ================= Q1 ================= */}
      <h2>Q1: Status Toggle</h2>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>
      {status ? <ComponentA /> : <ComponentB />}

      <hr />

      {/* ================= Q2 ================= */}
      <h2>Q2: Conditional Styling</h2>
      <div
        style={{
          width: "200px",
          padding: "20px",
          color: "white",
          backgroundColor: isRed ? "red" : "blue",
          marginBottom: "10px",
        }}
      >
        Color Toggle Box
      </div>
      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>

      <hr />

      {/* ================= Q3 ================= */}
      <h2>Q3: Todo List with Cleanup</h2>
      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {showTodos && <TodosList />}
    </div>
  );
}

export default App;
