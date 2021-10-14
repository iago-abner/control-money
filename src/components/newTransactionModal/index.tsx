import Modal from 'react-modal'

interface NewTransactionModalProps{
    open: boolean;
    close: () => void;
}

export function NewTransactionModal({open,close} : NewTransactionModalProps) {
    return(
    <Modal
        isOpen={open}
        onRequestClose={close}>
        <h2>Request</h2>
    </Modal>
    )
}