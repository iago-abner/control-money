import styled from "styled-components";

export const Container = styled.div`
    margin-top: 3rem;
    td:first-child { 
        border-top-left-radius: 0.4rem;
        border-bottom-left-radius: 0.4rem 
    }
    td:last-child { 
        border-top-right-radius: 0.4rem;
        border-bottom-right-radius: 0.4rem;
    }

    table{
        width: 100%;
        line-height:3rem;
        border-spacing: 0 0.5rem;
        border-collapse: separate;
        
        th{
            text-align: left;
            padding: 1rem 2rem;
            font-weight: 500;
            color: var(--text-title);            
            line-height: 1.5rem;
            
        }

        td{
            text-align: left;
            padding: 1rem 2rem;
            background: var(--shape);
            color: var(--text-body);
           

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