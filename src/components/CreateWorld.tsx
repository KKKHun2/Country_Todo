import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { toDoState } from "../atoms";
import styled from "styled-components";

const TodoForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: auto;
  :span {
    color: red;
  }
`;
const TodoBody = styled.div`
  display: flex;
  margin: 10px;
`;
const Todospan = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 70px;
  font-size: 17px;
  color: red;
`;
const Input = styled.input`
  :focus {
    border: solid 3px #e84118;
  }
  border-radius: 8px;
`;

const Button = styled.button`
  margin-left: 3px;
  background-color: #718093;
  width: 60px;
`;

interface IForm {
  toDo: string;
}

function CreateWorld() {
  const setToDos = useSetRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos
    ]);
    setValue("toDo", "");
  };
  return (
    <TodoForm onSubmit={handleSubmit(handleValid)}>
      <TodoBody>
        <Input
          {...register("toDo", {
            required: "나라 이름을 적어주세요!"
          })}
          placeholder="나라 이름"
        />
        <Button>떠나자!</Button>
      </TodoBody>
      <Todospan>
        <hr />
        <span>{errors?.toDo?.message}</span>
      </Todospan>
    </TodoForm>
  );
}

export default CreateWorld;
