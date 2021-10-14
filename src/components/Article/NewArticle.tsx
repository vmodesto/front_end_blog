import { Header } from "../Header/Header";
import { Container, TextArea } from "./styles/styles";
import { Button } from "../../styles/CustomForm";
import React, { useState } from "react";
import api from "../../services/api";

export interface FormValues  {
  title: string,
  content: string,
}

export function NewArticle(){
  const [values, setValues] = useState<FormValues>({
    title: "",
    content: ""
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, title: e.currentTarget.value})
  }
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({...values, content: e.currentTarget.value})
  }

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    api.post("api/articles", {
      title: values.title,
      content: values.content
    }).then(function (response) {
      console.log(response.data)
    })
  }

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleFormSubmit}>
        <input 
          onChange={handleTitleChange}
          value={values.title}
          placeholder="Title"
          type="text"
          name="Title"
        />
        <TextArea
          onChange={handleContentChange}
          value={values.content}
          
        />
        <Button type="submit">Criar artigo</Button>
        </form>
      </Container>
    </>
  )
}