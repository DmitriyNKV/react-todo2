import React from "react";
import style from "./css/Header.module.css";
import { Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <Col>
        {" "}
        <div className={style.root}>Tasks for today</div>
      </Col>
    </Row>
  );
};

export default Header;
