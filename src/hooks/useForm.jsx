import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addTodo } from "./useTodo";

const useForm = (initialState) => {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState(initialState);

  const handleFormValueChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormValueSubmit = (e) => {
    e.preventDefault();
    dispatch(__addTodo(formValue));
  };

  return [formValue, handleFormValueChange, handleFormValueSubmit];
};

export default useForm;
