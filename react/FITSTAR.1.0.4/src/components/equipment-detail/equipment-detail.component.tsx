// EquipmentDetail.tsx
import { useLocation, useNavigate } from 'react-router-dom';
import './equipment-detail.style.css';
import { useState } from 'react';
import Modal from '../modal/modal.component';
import { getToken } from '../../services/api';

/**
 * A component that renders a single equipment detail page.
 * @returns {JSX.Element} A JSX element that renders a single equipment detail page.
 */
const EquipmentDetail = () => {
    const location = useLocation();
    const navigate = useNavigate(); 
    const equipment = location.state; 
    const [quantity, setQuantity] = useState(1); 
    const [isModalOpen, setIsModalOpen] = useState(false);

    /**
     * Increase the quantity of the booking by 1.
     */
    const increaseQuantity = () => setQuantity(prev => (prev < 19 ? prev + 1 : 19));
    /**
     * Decrease the quantity of the booking by 1, but not below 1.
     */
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 19));


    const openModal = () => {
        const token = getToken();
        if (!token) {
                
            navigate('/login');
        } else {
            setIsModalOpen(true);
        }
    };
    
    /**
     * Close the booking modal.
     */
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
        <section className="equipment-detail">
            <div className="equipment-content">
                <h1 className="equipment-title">{equipment.name}</h1>
                <div className="equipment-image-container">
                    <img 
                        src={equipment.image}
                        alt={`A image of the equipment ${equipment.name}`}
                        className="equipment-image"
                    />
                </div>

                <p className="equipment-price">
                    Price per minute: <strong>{equipment.pricePerMinute}€</strong>
                </p>
                <div className="equipment-info">
                    <div className='counter'>
                        <button className="counter-button" onClick={decreaseQuantity}>-</button>
                        <span className="counter-value">{quantity}</span>
                        <button className="counter-button" onClick={increaseQuantity}>+</button>
                    </div>

                    <button className="equipment-booking-button" onClick={openModal}>
                        Book
                    </button>
                </div>
                <div>
                    <p className="equipment-description">{equipment.description}</p>
                </div>
            </div>
        </section>

        <Modal 
            isOpen={isModalOpen} 
            equipment={equipment} 
            duration={quantity}
            onClose={closeModal} 
        />
        </>
    );
};

export default EquipmentDetail;