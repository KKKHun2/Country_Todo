import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";
import styled from "styled-components";
import { BsSendCheckFill, BsFillTrash3Fill } from "react-icons/bs";
import { FcLike } from "react-icons/fc";

const WorldLi = styled.li`
  .logo1 {
    padding-top: 5px;
    font-size: 30px;
    color: #4cd137;
  }
  .logo2 {
    padding-top: 5px;
    font-size: 30px;
    color: #c23616;
  }
`;

const WorldButton = styled.button`
  background-color: #7f8fa6;
  margin: 5px;
  width: 50px;
`;
const Span = styled.span`
  display: flex;
  justify-content: center;
  width: 100px;
  font-weight: 700;
  font-size: 25px;
`;

function World({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name }
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1)
      ];
    });
  };
  const onClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name }
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [...oldToDos.slice(targetIndex + 1)];
    });
  };

  return (
    <WorldLi>
      <Span>{text}</Span>
      <hr />
      {category !== "DOING" && category !== "DONE" && (
        <WorldButton name="DOING" onClick={onClick}>
          <BsSendCheckFill className="logo1" />
        </WorldButton>
      )}

      {category !== "TO_DO" && (
        <WorldButton name="TO_DO" onClick={onClick2}>
          <BsFillTrash3Fill className="logo2" />
        </WorldButton>
      )}
      {category !== "DONE" && (
        <WorldButton name="DONE" onClick={onClick}>
          <FcLike className="logo2" />
        </WorldButton>
      )}
    </WorldLi>
  );
}
export default World;
