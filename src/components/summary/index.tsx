import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

import entradaImg from "../../assets/income.svg";
import saidaImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary(){
    const {transactions} = useTransactions();

    const summary = transactions.reduce((acumulator, transaction) => {
        if(transaction.type === 'deposit' ){
            acumulator.deposits += transaction.amount
            acumulator.total += transaction.amount
        } else{
            acumulator.withdraws += transaction.amount
            acumulator.total -= transaction.amount
        }
        return acumulator;
    },{
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    console.log(transactions);
    return(
        <Container>
            <div>
                <header>
                    <img src={entradaImg} alt="entrada" />
                    <p>Entrada</p>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.deposits)}</strong>
            </div>
            <div>
                <header>
                    <img src={saidaImg} alt="saida" />
                    <p>Saída</p>
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraws)}</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <img src={totalImg} alt="total" />
                    <p>Total</p>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',{
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)}</strong>
            </div>
        </Container>
    )
}