import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodoThunk } from "../actions/TodoActions";
import { initState, TodoState } from "./Todolist";

const Input = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const { date } = useSelector((state: TodoState) => ({
    date: state.date.date,
  }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todo = inputRef.current!.value;
    console.log(date);
    createTodoThunk(dispatch, () => initState, {
      todo,
      date,
      isFinished: false,
    });
    inputRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo"></label>
      <input type="text" id="todo" ref={inputRef} />
      <button type="submit">확인</button>
    </form>
  );
};

export default Input;
