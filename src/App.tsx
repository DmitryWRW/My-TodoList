import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
  //
  const [todolist, setTodolist] = useState([
    { text: "buy milk", isChecked: false, id: 1 },
    { text: "buy bread", isChecked: true, id: 2 },
    { text: "sell milk", isChecked: false, id: 3 },
  ]);
  //
  let checkboxHandler = (id: number) => {
    //обьявление функции принимающая id с числом
    const newTodoList = todolist.map((el) => {
      //функция проходит по всем обьектам массива и если id обьекта совпадает с id, то функция возвращает весь обьект и меняет значение isChecked на противоположный пришедшему, в противном случае функция возращает пришедший обьект
      return el.id == id ? { ...el, isChecked: !el.isChecked } : el;
    });
    setTodolist(newTodoList);
  };
  //возращает компоненту TodoList и передает ей функцию, загаловок и массив данных
  return (
    <TodoList
      title="What to learn"
      arrayData={todolist}
      checkboxHandler={checkboxHandler}
    />
  );
}

export default App;
