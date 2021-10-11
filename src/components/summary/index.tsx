import { Container } from "./styles";
import entradaImg from "../../assets/income.svg";
import saidaImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <img src={entradaImg} alt="entrada" />
                    <p>Entrada</p>
                </header>
                <strong>R$12.000,00</strong>
            </div>
            <div>
                <header>
                    <img src={saidaImg} alt="saida" />
                    <p>Saída</p>
                </header>
                <strong>-R$1.100,00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <img src={totalImg} alt="total" />
                    <p>Total</p>
                </header>
                <strong>R$10.900,00</strong>
            </div>
        </Container>
    )
}