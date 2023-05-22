import React from "react";
import { Link, Outlet } from "react-router-dom";

TodoFeatures.propTypes = {};

function TodoFeatures() {
  return (
    <div>
      Todo Share UI
      <ul>
        <li>
          <Link to="/todos/:todoId">Todo DetailPage</Link>
        </li>
        <li>
          <Link to="/todos/todo-list">Todo List</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default TodoFeatures;
