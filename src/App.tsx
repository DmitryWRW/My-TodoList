import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const arrayObj = [{ name: "dimon", secondName: "vasilyev" }];
  function sayName(name: string) {
    console.log(name);
  }
  sayName(arrayObj[0].name);
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
