import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./styles.scss";
TodoList.propTypes = {
  todoList: PropTypes.array,
};

TodoList.defaultProps = {
  todoList: [],
};

function TodoList({ todoList, onTodoClick }) {
  function handleClick(todo, idx) {
    if (!onTodoClick) return;
    onTodoClick(todo, idx);
  }
  return (
    <ul>
      {todoList.map((todo, idx) => (
        <li
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          key={todo.id}
          onClick={() => handleClick(todo, idx)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
