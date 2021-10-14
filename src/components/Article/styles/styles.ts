import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  height: 60%;
  width: 35rem;
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    
    input {
      margin: 0.5rem;
      outline: none;
      border-color: rgba(0, 0, 0, 0.4);
      border-radius: 5px;
      padding: 0.5rem 5px;
      width: 100%;
      height: 3rem;
    }
  }


`;

export const TextArea = styled.textarea`
    width: 100%;
    height: 30rem;
    margin: 0.5rem;
    outline: none;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    padding: 0.5rem 5px;

    @media (max-width: 1080px) {
        font-size: 80%;
        width: 16rem;
    }

    @media (max-width: 720px) {
        font-size: 70%;
        width: 14rem;
    }

    @media (max-width: 360px) {
        font-size: 60%;
        width: 12rem;
    }

`;