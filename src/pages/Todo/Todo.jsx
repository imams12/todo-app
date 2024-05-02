import { Component } from "react";
import TodoForm from "./Component/TodoForm";
import TodoList from "./Component/TodoList";
import PropTypes from "prop-types";
import WithLoading from "../../shared/hoc/withUIState";
import LoadingAnimation from "../../shared/Animation/LoadingAnimation";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Todo() {
  const handlePostTodo = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos",{
      method: 'POST',
      headers:{
        'Content-Type': "application/json",
      },
      body: JSON.stringify({
        userId:"1",
        id:201,
        title: "test post todo",
        completed: false,
      })
    })
    const json = await response.json();
    console.log(json);
  }

  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then((data) => console.log(data));
  })
  return (
    <div className="container-fluid pt-4 px-4">
      <h2>Todo</h2>
      {/* <TodoForm /> */}
      <button className="bg-primary">
        <Link to={"form"} className="text-white text-decoration-none">
          Tambah Todo
        </Link>
      </button>
      <button className=" bg-primary text-white ms-2" onClick={handlePostTodo}>
          Kirim Todo
      </button>
      {/* {this.props.isLoading ? (
        <LoadingAnimation />
      ) : ( */}
        <div className="shadow-sm p-4 rounded-2 mt-4">
          {/* <h3>List Todo</h3> */}
          <TodoList />
        </div>
      {/* )} */}
    </div>
  );
}

Todo.propTypes = {
  isLoading: PropTypes.bool,
  handleShowLoading: PropTypes.func,
  handleHideLoading: PropTypes.func,
  showToast: PropTypes.func,
};

export default WithLoading(Todo);
