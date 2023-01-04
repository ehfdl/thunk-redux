import { useDispatch } from "react-redux";
import { __deleteTodo } from "../redux/module/todosSlice";

const useDeleteTodo = () => {
  const dispatch = useDispatch();

  const onClickDeleteButtonHandler = (Id) => {
    dispatch(__deleteTodo(Id));
  };
  return [onClickDeleteButtonHandler];
};

export default useDeleteTodo;
