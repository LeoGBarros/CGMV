import React from 'react';
import Modal from 'react-modal';
import styles from '../components/ContactModal.module.css';
import { Seller } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  seller: Seller;
}

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  seller,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles['modal-content']}
      overlayClassName={styles['modal-overlay']}
    >
      <h2 className={styles['modal-title']}>Contato do Vendedor</h2>
      <div className={styles['contact-info']}>
        <p>
          <strong>Nome:</strong> {seller.name}
        </p>
        <p>
          <strong>Telefone:</strong> {seller.phone}
        </p>
        <p>
          <strong>Email:</strong> {seller.email}
        </p>
      </div>
      <div className={styles['modal-buttons']}>
        <button className={styles['close-button']} onClick={onClose}>
          Fechar
        </button>
      </div>
    </Modal>
  );
};

export default ContactModal;
