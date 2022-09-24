import { title } from "process";
import React from "react";
type TodoListProps = {
  title: string;
  task1: string;
  task2: string;
  task3: string;
};
function TodoList(props: TodoListProps) {
  return (
    <div>
      <div className="head">
        <h3>{props.title}</h3>
      </div>
      <input type="text" />
      <button>+</button>
      <div className="body">
        <div className="list">
          <ul>
            <li>
              <input type="checkbox" />
              <span>{props.task1}</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>{props.task2}</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>{props.task3}</span>
            </li>
          </ul>
        </div>
        <div className="footer">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
