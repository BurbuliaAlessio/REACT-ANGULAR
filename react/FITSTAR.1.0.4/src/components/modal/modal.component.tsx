import { useNavigate } from "react-router-dom";
import { ModalProps } from "../../models/modal.model";
import { bookEquipment } from "../../services/api";
import "./modal.style.css";

const Modal = ({ isOpen, duration, equipment, onClose}: ModalProps) => {
  const navigate = useNavigate();
    if (!isOpen) return null;
    const totalPrice = (equipment.pricePerMinute * duration).toFixed(2);

    const refreshAndBook = async () => {
      onClose();
      await bookEquipment(equipment.id, duration);
      navigate(0);
    };

    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>Booking for {equipment.name}</h2>
          <p>Duration: {duration}</p>
          <p>Price: {totalPrice} $</p>
          <button onClick={onClose}>Close</button>
          <button onClick={refreshAndBook}>Confirm Booking</button>
        </div>
      </div>
    );
  };

export default Modal; 