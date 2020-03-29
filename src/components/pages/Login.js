import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../../App.css";

export const Login = () => {
  const [inputNeed, setInputNeed] = useState("");

  return (
    <Parent>
      <Form className="login-form">
        <h1>MediLA</h1>
        <FormGroup>
          <Label>What do you need?</Label>
          <Input
            type="text"
            placeholder="Sanitizer"
            onChange={e => setInputNeed(e.target.value)}
            value={inputNeed}
          />
        </FormGroup>
        <FormGroup>
          <Label>What city are you from?</Label>
          <Input
            type="text"
            placeholder="Los Angeles"
            // onChange={e => setInputNeed(e.target.value)}
            // value={inputNeed}
          />
        </FormGroup>
        <Button
          onClick={() => {
            localStorage["loggedIn"] = JSON.stringify(true);
            localStorage["selectedChoice"] = inputNeed;
            window.location.href = "/map";
          }}
          className="btn-lg btn-dark btn-block"
        >
          Enter
        </Button>
      </Form>
    </Parent>
  );
};

const Parent = styled.div`
  text-align: center;
`;
