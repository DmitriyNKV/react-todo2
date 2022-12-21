import React, { useState } from "react";
import dayjs from "dayjs";
import style from "./css/TodoList.module.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faEdit,
  faSave,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const TodoList = ({ todo, setTodo }) => {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  const deleteTodo = (id) => {
    let newTodo = [...todo].filter((i) => i.id != id);
    setTodo(newTodo);
  };

  const todoStatus = (id) => {
    const today = dayjs().format("DD-MM-YYYY");
    const pastDate = dayjs("2022-11-26").format("DD-MM-YYYY");
    let newTodo = [...todo].filter((i) => {
      if (i.id === id && today !== pastDate) {
        i.status = !i.status;
      }
      return i;
    });
    setTodo(newTodo);
  };

  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  const saveNewTodo = (id) => {
    let newTodo = [...todo].map((i) => {
      if (i.id == id) {
        i.title = value;
      }

      return i;
    });

    setTodo(newTodo);
    setEdit(null);
  };

  return (
    <div>
      {todo.map((i) => (
        <div className={style.list} key={i.id}>
          {edit == i.id ? (
            <div>
              <input value={value} onChange={(i) => setValue(i.target.value)} />
            </div>
          ) : (
            <div className={i.status ? style.close : ""}>
              {i.title}
              <br />
              {i.SaveTimeItem}
              {i.currentDate}
            </div>
          )}
          {edit == i.id ? (
            <div>
              <Button className={style.btn} onClick={() => saveNewTodo(i.id)}>
                <FontAwesomeIcon icon={faSave} />
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(i.id)}>
                {" "}
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button
                className={style.btn}
                onClick={() => editTodo(i.id, i.title)}
              >
                {" "}
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button className={style.btn} onClick={() => todoStatus(i.id)}>
                {i.status ? (
                  <FontAwesomeIcon icon={faXmark} />
                ) : (
                  <FontAwesomeIcon icon={faCheck} />
                )}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
