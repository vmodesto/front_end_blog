import { useState } from "react";
import api  from "../../services/api";
import { Button, Container, Input } from "../../styles/CustomForm";

export function Register(){

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleNameChange = (e) => {
        setUser({...user, name: e.currentTarget.value});
    }

    const handleEmailChange = (e) => {
        setUser({...user, email: e.currentTarget.value});
    }

    const handlePasswordChange = (e) => {
        setUser({...user, password: e.currentTarget.value});
    }

    const createUser = (user) => {

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
            <Input placeholder="Name" value={user.name} onChange={handleNameChange}/>
            <Input placeholder="Email" value={user.email} onChange={handleEmailChange}/>
            <Input placeholder="Password" value={user.password} onChange={handlePasswordChange}/>
            <Button onClick={() => createUser(user)}><p>Entrar</p></Button>
        </Container>
    )
}