import React, { useState } from "react";

import { v4 as uuid } from "uuid";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import style from "./css/Form.module.css";

const AddTodo = ({ todo, setTodo, currentDate }) => {
  const [value, setValue] = useState("");

  const saveTodo = () => {
    setTodo([
      ...todo,
      {
        id: uuid(),
        title: value,
        status: false,
        SaveTimeItem: `${currentDate}`,
      },
    ]);
    setValue("");
  };
  return (
    <Row>
      <Col className={style.todoForm}>
        <FormControl
          placeholder="Введите задачу"
          value={value}
          onChange={(i) => setValue(i.target.value)}
        />
        <Button className={style.btn} size="sm" onClick={saveTodo}>
          Добавить
        </Button>
      </Col>
    </Row>
  );
};

export default AddTodo;
