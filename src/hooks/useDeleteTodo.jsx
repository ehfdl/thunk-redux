import React from "react";
import { useDispatch } from "react-redux";
import { __deleteTodo } from "./useTodo";

const useDeleteTodo = () => {
  const dispatch = useDispatch();

  const onClickDeleteButtonHandler = (Id) => {
    dispatch(__deleteTodo(Id));
  };
  return <div></div>;
};

export default useDeleteTodo;
