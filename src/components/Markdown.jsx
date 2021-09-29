import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/Markdown.css'


const Markdown = () => {
  const [input, setInput] = useState("")

  const teste = 'Um paragrafo com * enfase ** grande importancia **.'

  return (
    <div className="body">
      <textarea autofocus className="textarea" value={input} onChange={(e) => setInput(e.target.value)}
      />
      <hr className="line-center"/>
      <ReactMarkdown children={ input } className="markdown"/>
    </div>

   );
}

export default Markdown;