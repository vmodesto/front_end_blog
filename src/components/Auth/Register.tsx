import { useState } from "react";
import api  from "../../services/api";
import { Button, Container, Input } from "../../styles/CustomForm";
import { useHistory } from 'react-router-dom';

interface Register {
    name: string,
    email: string,
    password: string
}

interface Errors {
    userName: string,
    userEmail: string,
    userPassword: string;
  }

export function Register(){

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        userName: '',
        userEmail: '',
        userPassword: ''
    });

    const history = useHistory();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, name: e.currentTarget.value});
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, email: e.currentTarget.value});
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, password: e.currentTarget.value});
    }

    function validate(values: Register) {
        const errors: Errors = {
            userName: "",
            userEmail: "",
            userPassword: ""
        };
        if(values.name.length < 10){
            errors.userName = 'Por favor insira um nome valido'
        }
        if(!values.email.includes('@')){
            errors.userEmail = 'Por favor insira um email valido'
        }
        if(values.password.length < 8) {
            errors.userPassword = 'Por favor insira uma senha valida'
        }
        return errors;
    }

    const createUser = (user: Register) => {

        console.log(user)
        api.post("http://localhost:2266/users/create", {
            "email": user.email,
            "name": user.name,
            "password": user.password
        });
    }

    return (
        <Container>
            <h1>Blog</h1>
            <h2>Cadastro</h2>
            <Input
                placeholder="Name"
                value={user.name}
                onChange={handleNameChange}
            />
            {errors.userName && <span>{errors.userName}</span>}
            <Input
                placeholder="Email"
                value={user.email}
                onChange={handleEmailChange}
            />
            {errors.userEmail && <span>{errors.userEmail}</span>}
            <Input
                placeholder="Password"
                value={user.password}
                onChange={handlePasswordChange}
            />
            {errors.userPassword && <span>{errors.userPassword}</span>}
            <Button
                onClick={() => {
                    setErrors(validate(user));
                    createUser(user);
                }}>
                <p>Criar conta</p>
            </Button>
        </Container>
    )
}