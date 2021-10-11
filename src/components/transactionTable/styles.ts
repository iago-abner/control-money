import styled from "styled-components";

export const Container = styled.div`
    margin-top: 3rem;
    border-radius: 0.3rem;
    table{
        width: 100%;
        line-height:3rem;
        border-spacing: 0 0.5rem;

        th{
            text-align: left;
            padding: 1rem 2rem;
            font-weight: 400;
            color: var(--text-body);
            line-height: 1.5rem;
        }

        td{
            text-align: left;
            padding: 1rem 2rem;
            border:0;
            background: var(--shape);
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child{
                color: var(--text-title);
            }

            &.withdraw{
                color: var(--red);
            }

            &.deposit{
                color: var(--green);
            }
        }
    }
`;