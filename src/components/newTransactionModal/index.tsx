import Modal from 'react-modal'
import CloseImg from '../../assets/close.svg'
import { Container } from './styles';

interface NewTransactionModalProps {
    open: boolean;
    close: () => void;
}

export function NewTransactionModal({ open, close }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={open}
            onRequestClose={close}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">

            <button type="button" onClick={close} className="react-modal-close">
                <img src={CloseImg} alt="close modal" />
            </button>

            <Container>
                <h2>Cadastrar transações</h2>
                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />
                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );
}