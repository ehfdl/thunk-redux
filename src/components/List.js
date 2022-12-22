import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getTodos } from "../redux/module/todosSlice";
import styled from "styled-components";
import { __deleteTodo } from "../redux/module/todosSlice";

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(__getTodos());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const onClickDeleteButtonHandler = (Id) => {
    dispatch(__deleteTodo(Id));
  };

  return (
    <ListContainer>
      <P>Working</P>

      {todos.map((todo) => (
        <TodoBox key={todo.id}>
          <TodoTitle>{todo.title}</TodoTitle>
          <TodoText>{todo.content}</TodoText>
          <Button
            type="button"
            onClick={() => onClickDeleteButtonHandler(todo.id)}
          >
            삭제하기
          </Button>
        </TodoBox>
      ))}
    </ListContainer>
  );
};

export default List;

//styled-components

const ListContainer = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 10px;
  border: 1px solid gray;
  border-radius: 20px;
`;
const P = styled.p`
  font-size: x-large;
  font-weight: bold;
`;
const TodoBox = styled.div`
  display: inline-block;
  width: 253px;
  min-height: 120px;
  margin: 10px;
  padding: 25px 30px 20px 30px;
  background-color: #aaa;
`;

const TodoTitle = styled.div`
  position: relative;
  font-size: x-large;
  margin-bottom: 10px;
  word-break: break-all;
`;

const TodoText = styled.div`
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 20px;
  word-break: break-all;
`;

// 버튼 children 의 텍스트 별로 다른 색 적용 그냥 연습해봄
const Button = styled.button`
  margin-left: 10px;
  width: 113px;
  height: 40px;
  /* background-color: #eee; */

  cursor: pointer;
  &:hover {
    scale: 1.03;
    color: ${(props) =>
      props.children === "삭제하기"
        ? "#b73e3e"
        : props.children === "완료하기"
        ? "#009EFF"
        : "#E8AA42"};
    border-color: ${(props) =>
      props.children === "삭제하기"
        ? "#b73e3e"
        : props.children === "완료하기"
        ? "#009EFF"
        : "#E8AA42"};
  }
`;
