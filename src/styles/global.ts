import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F0F2F5;
        --red: #E62E4D;
        --blue: #5429CC;
        --blue-light: #6933ff;
        --green: #33CC95;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --shape: #FFFFFF;
    }

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box ;
    }

    //ajustando a fonte de acordo com o tamanho da tela:
    html{
        @media(max-width:1080px){
            font-size: 93.75%; //15px
        }
        @media(max-width:720px){
            font-size: 87.5%; //14px
        }
    }
    //rem = 16px = tamanho da fonte .: rem adapta melhor aos diferentes tamanhos de tela

    body, button, input, textarea{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    h1{
        color: #8257e6;
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.5);
    }

    .react-modal-content{
        position: relative;
        padding: 3rem;
        width: 100%;
        max-width: 576px;
        background: var(--background);
        border-radius: 0.25rem;
    }

    .react-modal-close{
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        border: 0;
        background: transparent;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }
    }
`