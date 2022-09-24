import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div>
      <TodoList
        title="My TodoList"
        task1="First task"
        task2="Second task"
        task3="Third task"
      />
    </div>
  );
}

export default App;
