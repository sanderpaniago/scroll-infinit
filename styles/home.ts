import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;

    background: #fafafa;
    display: flex;

    align-items: center;
    justify-content: center;
`; 

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: sans-serif;
    }
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    ul {
        width: 300px;
        height: 600px;
        overflow-y: scroll;
        padding: 0;
        background-color: #ddd;
    }
    li {
        height: 150px;
        padding: 15px;
    }
    li img {
        --size: 75px;
        width: var(--size);
        height: var(--size);
        border-radius: 50%;
    }
    li div {
        padding: 15px;
        background-color: #fff;
        height: calc(100% - 30px);
    }
`;
