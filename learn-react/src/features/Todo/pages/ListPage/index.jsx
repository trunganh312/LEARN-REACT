import queryString from 'query-string';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TodoForm from '../../components/TodoForm';
import TodoList from '../../components/TodoList';
ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Sleep',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Code',
      status: 'new',
    },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredTodoList, setFilteredTodoList] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || 'all';
  });

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredTodoList(params.status || 'all');
  }, [location.search]);
  const handleClick = (todo, idx) => {
    const newTodoList = [...todoList];
    const newTodo = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };
    newTodoList[idx] = newTodo;
    setTodoList(newTodoList);
  };

  function handleShowAll() {
    // setFilteredTodoList("all");
    const queryParams = { status: 'all' };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams),
    });
  }

  function handleShowCompleted() {
    // setFilteredTodoList("completed");
    const queryParams = { status: 'completed' };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams),
    });
  }

  function handleShowNew() {
    // setFilteredTodoList("new");
    const queryParams = { status: 'new' };
    navigate({
      pathname: location.pathname,
      search: queryString.stringify(queryParams),
    });
  }

  const renderTodoList = todoList.filter(
    (todo) => filteredTodoList === 'all' || todo.status === filteredTodoList
  );

  const handleTodoFormSubmit = (values) => {
    console.log(values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };

    const newTodoList = [...todoList, newTodo];

    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>TodoForm</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h2>Todo list</h2>
      <TodoList todoList={renderTodoList} onTodoClick={handleClick} />
      <div>
        <button onClick={handleShowAll}>Show All</button>
        <button onClick={handleShowCompleted}>Show Completed</button>
        <button onClick={handleShowNew}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
