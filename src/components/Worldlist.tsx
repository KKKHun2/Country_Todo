import { useRecoilValue } from "recoil";
import { toDoSelector } from "../atoms";
import CreateWorld from "./CreateWorld";
import World from "./World";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: auto;
  padding: 100px 0px;
  justify-content: center;
  align-items: center;
  background-color: #40739e;
`;

const Title = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
`;

function Worldlist() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <Container>
        <hr />

        <Title>가고싶은 나라 이름!</Title>
        <CreateWorld />
        <ul>
          {toDo.map((toDo) => (
            <World key={toDo.id} {...toDo} />
          ))}
        </ul>

        <hr />
        <Title>내가 가본 나라</Title>
        <ul>
          {doing.map((toDo) => (
            <World key={toDo.id} {...toDo} />
          ))}
        </ul>
        <hr />
        <Title>내가 좋아하는 나라</Title>
        <ul>
          {done.map((toDo) => (
            <World key={toDo.id} {...toDo} />
          ))}
        </ul>
        <hr />
      </Container>
    </div>
  );
}
export default Worldlist;
