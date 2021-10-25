import Modal from 'react-modal'; 
import logoImg from '../../assets/Logo.svg'
import { Container, Content } from './styles';

interface HeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="logo" />
                <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>    
        </Container>
    );
}