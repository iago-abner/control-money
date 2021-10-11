import styled from 'styled-components'

export const Container = styled.header`
    background: var(--blue);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 7.5rem;
    display:flex;
    justify-content: space-between;

    button{
        background: var(--blue-light);
        color: var(--shape);
        border: none;
        border-radius: 0.5rem;
        padding: 1rem;

        transition: filter 0.3s;
        &:hover{
            filter: brightness(0.9)
        }
    }
`;