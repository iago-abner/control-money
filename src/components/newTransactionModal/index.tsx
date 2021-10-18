import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  open: boolean;
  close: () => void;
}

export function NewTransactionModal({ open, close }: NewTransactionModalProps) {

  const [type, setType] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={close}
      >
        <img src={closeImg} alt="Fechal modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          placeholder="Título"
        />
        <input
          type="number"
          placeholder="Valor"
        />

        <TransactionTypeContainer>

          <RadioBox
            type="button"
            onClick={() => { setType('deposit') }}
            isActive={type === 'deposit'}
            activeColor="green">
            <img src={incomeImg} alt="entrada icon" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => { setType('withdraw') }}
            isActive={type === 'withdraw'}
            activeColor="red">
            <img src={outcomeImg} alt="saída icon" />
            <span>Saída</span>
          </RadioBox>

        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}