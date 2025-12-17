import Counter from "./Counter";
import Calculator from "./Calculator";
import MessageCard from "./MessageCard";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      
      {/* Q1: Counter */}
      <h2>Counter App</h2>
      <Counter />

      <hr />

      {/* Q2: Calculator */}
      <h2>Basic Calculator</h2>
      <Calculator />

      <hr />

      {/* Q3: Reusable Component with Props */}
      <h2>Message Cards</h2>
      <MessageCard
        title="Welcome"
        message="Welcome to the React application"
      />
      <MessageCard
        title="Success"
        message="You have successfully completed the task"
      />
      <MessageCard
        title="Reminder"
        message="Practice React daily to improve your skills"
      />
      <MessageCard
        title="Good Luck"
        message="All the best for your assignment submission"
      />

      <hr />

      {/* Q4: Parent–Child Props */}
      <h2>User Profile</h2>
      <UserProfile />

    </div>
  );
}

export default App;
