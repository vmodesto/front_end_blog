import React, { useContext, useState } from "react";
import api from "../../services/api";
import { Input, Container, Button } from "../../styles/CustomForm";
import StoreContext from "../Store/Context";

import { Link, useHistory } from 'react-router-dom';


function initialState(){
    return {
        email: "",
        password: ""
    }
}

interface Login {
  email: string,
  password: string
}

interface Errors {
  userEmail: string,
  userPassword: string;
}

interface UserToken {
  token: string
}

function validate(values: Login) {
    const errors: Errors = {userEmail: "", userPassword: ""};
    if(!values.email.includes('@')){
        errors.userEmail = 'Por favor insira um email valido'
    }
    if(values.password.length < 8) {
        errors.userPassword = 'Por favor insira uma senha valida'
    }
    return errors;
}

export function Login() {
  const [login, setLogin] = useState(initialState);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();
  const [errors, setErrors] = useState<Errors>({
      userEmail: '',
      userPassword: ''
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, email: e.currentTarget.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, password: e.currentTarget.value });
  };

  const createLoginSession = (login: Login) => {
    api.post("api/users/login", {
      email: login.email,
      password: login.password,
    }).then(function (response) {
        const { token }: UserToken = response.data;
        if(token){
            setToken(token)
            console.log(token);
            return history.push('/');
        }else {
            setLogin(initialState);
        }
    });
  };

  return (
    <Container>
      <h1>Blog</h1>
      <h2>LOGIN</h2>
      <Input
        placeholder="Email"
        value={login.email}
        onChange={handleEmailChange}
        />
        {errors.userEmail && <span>{errors.userEmail}</span>}
      <Input
        placeholder="Password"
        value={login.password}
        onChange={handlePasswordChange}
        />
        {errors.userPassword && <span>{errors.userPassword}</span>}
      <Button onClick={() => {
          setErrors(validate(login))
          createLoginSession(login)
          }}>
        <p>Entrar</p>
      </Button>
      <Link to="/register" className="create-account">Entrar</Link>
    </Container>
  );
}
