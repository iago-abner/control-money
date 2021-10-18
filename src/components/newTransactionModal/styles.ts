import styled from 'styled-components';
import { darken, transparentize } from 'polished'

export const Container = styled.form`
    
    h2{
        width: 100%;
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    
    input{ 
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body)
        }

        & + input {
            margin-top: 1rem;
        }
    }

    button[type="submit"]{
        width: 100%;
        margin-top: 1.5rem;
        height: 4rem;
        border-radius: 0.3rem;
        border:0 ;
        color: #FFF;
        background: var(--green);
        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9)
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    display: grid;
    margin: 1rem 0;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;

`;

interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    red: '#E62E4D',
    green: '#33CC95',
}

export const RadioBox = styled.button<RadioBoxProps>`
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${(props) => props.isActive 
        ? transparentize(0.9, colors[props.activeColor])
        : 'transparent'};

        height: 4rem;
        border-radius: 0.3rem;
        border: 1px solid #d7d7d7;

        transition: border-color 0.2s;

        &:hover{
            border-color: ${darken(0.1, '#d7d7d7')};
        }
        img{
        height: 20px;
        width: 20px;
        }
        
        span{
            display: inline-block;
            margin-left: 1rem;
            color: var(--text-title-color);
            font-size: 1rem;
        }
`;