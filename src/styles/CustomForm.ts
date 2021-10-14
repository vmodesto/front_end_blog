import styled from 'styled-components';

export const Input = styled.input`
    margin: 0.5rem;
    outline: none;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    padding: 0.5rem 5px;
    width: 100%;
    height: 3rem;
    
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

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    height: 50%;
    width: 20rem;
    position:fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 18px;
        font-weight: normal;
    }

    h1, h2 {
        padding-bottom: 1rem;
    }

    .create-account {
        padding-top: 20px;
        align-self: center;
        font-size: 80%;
    }

    span {
        width: 20rem;
        font-size: 80%;
        color: red;
    }

    @media (max-width: 1080px) {
        span{
            font-size: 80%;
            width: 16rem;
        }
    }

    @media (max-width: 720px) {
        span {
            font-size: 70%;
            width: 14rem;
        }
    }

    @media (max-width: 360px) {
        span {
            font-size: 60%;
            width: 12rem;
        }
    }
`

export const Button = styled.button`
    background-color: #000000;
    border: none;
    color: #fff;
    padding: 1rem 5rem;
    margin-top: 1rem;
    border-radius: 5px;
    font-size: 1rem;

    @media (max-width: 1080px) {
        font-size: 80%;
        padding: 1rem 4rem;
    }

    @media (max-width: 720px) {
        font-size: 70%;
        padding: 1rem 3rem;
    }

    @media (max-width: 360px) {
        font-size: 60%;
        padding: 1rem 2rem;
    }

    &:hover {
        filter: brightness(0.5);
    }

    p {
        font-weight: bold;
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
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