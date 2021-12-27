import React, { useState } from "react";
import "./todo.styles.css";

const Todo = () => {
  const [todo, setToDo] = useState([
    { id: 1, name: "CSS", completed: true },
    { id: 2, name: "JavaScript", completed: true },
    { id: 3, name: "Learn React", completed: false },
    { id: 4, name: "Learn mongoDB", completed: false },
    { id: 5, name: "Learn Node JS", completed: false },
  ]);

  const handleClick = (id) => {
    // let updatedToDo = todo.map((todo) => {
    //   if (todo.id === id) {
    //     return { ...todo, completed: !todo.completed };
    //   }
    //   return todo;
    // });
    // setToDo(updatedToDo);
    //or this way
    const index = todo.findIndex((todo) => todo.id === id);
  
    const newArr = [...todo];
    newArr[index].completed = !newArr[index].completed;
    console.log(newArr);
    setToDo(newArr);
  };

  const renderTodo = () => {
    return (
      <>
        {todo.map((todo) => {
          const style = {
            textDecoration: todo.completed ? "line-through" : "",
            marginRight: "1rem",
          };

          const hoverStyle = {
            cursor: "pointer",
          };
          return (
            <div>
              <span style={style}>{todo.name}</span>
              <span style={hoverStyle} onClick={() => handleClick(todo.id)}>
                {todo.completed ? <>&#10004;</> : <>&#10005;</>}
              </span>
            </div>
          );
        })}
      </>
    );
  };

  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return <div style={style}>{renderTodo()}</div>;
};

export default Todo;
