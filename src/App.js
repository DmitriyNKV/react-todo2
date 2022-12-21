import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { Container } from "react-bootstrap";
import dayjs from "dayjs";

function App() {
  const today = dayjs().format("DD-MM-YYYY");
  const pastDate = dayjs("2022-11-26").format("DD-MM-YYYY");

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "10 отжиманий",
      status: true,
      SaveTimeItem: `${pastDate}`,
      currentDate: ``,
    },
    {
      id: 2,
      title: "Покормить кота",
      status: false,
      SaveTimeItem: "",
      currentDate: `${today}`,
    },
    {
      id: 3,
      title: "Купить молоко",
      status: false,
      SaveTimeItem: "",
      currentDate: `${today}`,
    },
  ]);

  //
  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} currentDate={today} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
