import styled from 'styled-components';

export const Input = styled.input`
    margin: 0.5rem;
    outline: none;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    padding: 0.5rem 5px;
    width: 15rem;
    
    @media (max-width: 1080px) {
        font-size: 80%;
    }

    @media (max-width: 720px) {
        font-size: 70%;
    }

    @media (max-width: 360px) {
        font-size: 60%;
    }

`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin:auto;
    height: 50%;
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
`

export const Button = styled.button`
    background-color: #000000;
    border: none;
    color: #fff;
    padding: 1rem 6rem;
    margin-top: 1rem;
    border-radius: 5px;
    font-size: 1rem;

    &:hover {
        filter: brightness(0.5);
    }

    p {
        font-weight: bold;
    }
`