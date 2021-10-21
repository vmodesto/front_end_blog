import { Header } from "../Header/Header";
import { Container } from "./styles/styles";
import { Button } from "../../styles/CustomForm";
import React, { useState } from "react";
import api from "../../services/api";
import ReactMarkdown from "react-markdown";

export interface FormValues  {
  title: string,
  content: string,
  description: string
}

export function NewArticle(){
  const [input, setInput] = useState('');
  const [values, setValues] = useState<FormValues>({
    title: "",
    content: "",
    description: ""
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values, title: e.currentTarget.value})
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setValues({...values, description: e.currentTarget.value})
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({...values, content: e.currentTarget.value})
  }

  const handleFormSubmit = () => {
    api.post("api/articles", {
      title: values.title,
      content: values.content,
      description: values.description
    }).then(function (response) {
      console.log(response.data)
    })
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <h1 className="title">Editor</h1>
        <textarea
          rows={40}
          className="textarea"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInput(e.currentTarget.value)}
        />
        </div>
        <div>
        <h1 className="title">Formatted text</h1>
        <ReactMarkdown  children={input}/>
        </div>
      </Container>
      <Container>
        <div>
          <Button className="button" onClick={() => handleFormSubmit}>Send Article</Button>
        </div>
      </Container>
    </>
  )
}