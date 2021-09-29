import { useState } from "react";
import api from "../../services/api";
import { Input, Container, Button } from "../../styles/CustomForm";

export function Login(){
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleEmailChange = (e) => {
        setLogin({...login, email: e.currentTarget.value})
    }

    const handlePasswordChange = (e) => {
        setLogin({...login, password: e.currentTarget.value})
    }

    const createLoginSession = (login) => {

        api.post("http://localhost:2266/authentications/authenticate", {
            "email": login.email,
            "password": login.password,
        })

    }

    return (
            <Container>
                <h1>Blog</h1>
                <h2>LOGIN</h2>
                <Input value={login.email} onChange={handleEmailChange}/>
                <Input value={login.password} onChange={handlePasswordChange}/>
                <Button onClick={() => createLoginSession(login)}><p>Entrar</p></Button>
            </Container>
    )
}