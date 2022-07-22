import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
        font-family: 'Epilogue', sans-serif;
    }
    :root{
        --almost-White: hsl(0, 0%, 98%);
        --medium-Gray: hsl(0, 0%, 41%);
        --almost-Black: hsl(0, 0%, 8%);
    }
    button{
        outline:none;
        cursor:pointer;
    }
    li{
        list-style:none;
    }
`