import styled from "styled-components";
import useForm from "../hooks/useForm";

const Input = () => {
  const [formValue, handleFormValueChange, handleFormValueSubmit] = useForm({
    title: "",
    content: "",
  });

  return (
    <InputContainer onSubmit={handleFormValueSubmit}>
      <InputBox
        type="text"
        name="title"
        value={formValue.title}
        onChange={handleFormValueChange}
      />
      <InputBox
        type="text"
        name="content"
        value={formValue.content}
        onChange={handleFormValueChange}
      />
      <Button>추가하기</Button>
    </InputContainer>
  );
};

export default Input;

// styled-component

const InputContainer = styled.form`
  position: relative;
  max-width: 750px;
  width: 100%;
  height: 50px;
  padding: 20px;
  background-color: gray;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 20px;
  border: 1px solid gray;
  border-radius: 20px;
`;
const InputBox = styled.input`
  position: relative;
  max-width: 300px;
  width: 100%;
  height: 45px;
  background-color: #eee;
  border: none;
  border-radius: 10px;
  margin: 0 10px 0 0;
  padding-left: 10px;
  font-size: 16px;
  transition-duration: 0.3s;
  &:hover {
    box-shadow: 3px 3px 5px #aaa;
  }
  &::placeholder {
    padding-left: 2px;
  }
  &:focus {
    box-shadow: 3px 3px 5px #aaa;
    scale: 1.01;
  }
  &:focus::placeholder {
    color: #111;
  }
`;
const Button = styled.button`
  right: 20px;
  position: absolute;
  width: 65px;
  height: 45px;
  border-radius: 10px;
  border-color: black;
  cursor: pointer;
  &:hover {
    scale: 1.03;
  }
`;
