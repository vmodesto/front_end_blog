import styled from "styled-components";

export const Container = styled.header`
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 2rem;
    display: flex;
    border-bottom: 1px solid rgba(108, 117, 125, 0.3);
    width: 100%;
`;

export const Logo = styled.h1`
    flex: 1;
    font-size: 32px;
    font-weight: bold;
`;

export const ButtonMenuContainer = styled.div`
    margin: 10px;
    padding: 10px;
    align-items: center;

    &:hover {
        border-radius: 10px;
        background-color: rgba(108, 117, 125, 0.3);
        transition: 600ms;
    }
`;

export const ButtonMenu = styled.button`
    flex: 0;
    padding: 0;
    border: none;
    width: 30px;
    border-top: 3px solid;
    background-color: transparent;
    cursor: pointer;

    &::after, &::before {
        content: '';
        display: block;
        width: 30px;
        height: 3px;
        background: black;
        margin-top: 5px ;
    }
`;

export const MenuContainer = styled.ul`
    display: flex;
    position: absolute;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
    margin-top: -2rem;
    background-color: #fff;
    list-style: none;
    justify-content: flex-start;
    text-align: center;
    width: 300px;
    border: 1px solid rgba(108, 117, 125, 0.3);
    border-top: none;
`;

export const MenuItem = styled.li`
    padding-top: 30px;
    padding-bottom: 30px;
    display: block;
    font-size: 24px;
`;