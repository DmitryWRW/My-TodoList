import React from "react";
function TodoList() {
  return (
    <div>
      <div className="head">
        <h3>What to learn</h3>
      </div>
      <input type="text" />
      <button>+</button>
      <div className="body">
        <div className="list">
          <ul>
            <li>
              <input type="checkbox" />
              <span>Dimon</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>You have to do</span>
            </li>
            <li>
              <input type="checkbox" />
              <span>Your homework</span>
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
