import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  height: 100%;

  @media (max-width: 1080px) {
    font-size: 80%;
    width: 80%;
  }

  @media (max-width: 720px) {
      font-size: 70%;
      width: 70%;
  }

  @media (max-width: 360px) {
      font-size: 60%;
      width: 60%;
  }

  div {
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;

    button {
      display: flex;
      flex-direction: row;
      width: 20%;
      align-self: center;
    }
  }

  .title {
    text-align: center;
    padding-bottom: 1rem;
  }

  .container-item {
    width: 50%;
    border-radius: 5px;
  }

  .textarea {
    resize: none;
    border-radius: 5px;
  }
`;