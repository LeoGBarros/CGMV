import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Vehicle } from '../types';
import ContactModal from './ContactModal';
import styles from './VehicleCard.module.css';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles['vehicle-card']}>
      <img
        src={vehicle.image}
        alt={vehicle.model}
        className={styles['vehicle-image']}
      />
      <div className={styles['vehicle-details']}>
        <h3>
          {vehicle.brand} {vehicle.model}
        </h3>
        <p className={styles['price']}>{vehicle.price}</p>
        <a href="#" className={styles['location']}>
          {vehicle.location}
        </a>
        <p>{vehicle.date}</p>
      </div>

      <div className={styles['vehicle-footer']}>
        <FaHeart
          className={`${styles['favorite-icon']} ${
            isFavorite ? styles['favorite'] : ''
          }`}
          onClick={() => setIsFavorite(!isFavorite)}
        />
        <button
          className={styles['contact-button']}
          onClick={() => setModalOpen(true)}
        >
          Contato
        </button>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        seller={vehicle.seller}
      />
    </div>
  );
};

export default VehicleCard;
