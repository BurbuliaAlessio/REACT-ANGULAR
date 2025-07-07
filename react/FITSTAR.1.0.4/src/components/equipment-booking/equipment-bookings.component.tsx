import { useLocation } from "react-router-dom";
import { Booking } from '../../models/booking.model';
import useEquipmentsBookings from "./equipment-bookings.logic";
import { FitnessEquipment } from "../../models/equipment.model";
import "./equipment-bookings.style.css";
import convertTime from "./date.script";
export const EquipmentBookingsById = () => {
    const location = useLocation();
    const equipment: FitnessEquipment = location.state; 
    const {EquipmentBookings} = useEquipmentsBookings(equipment.id);

    return (
        <div className="bookings-container">
        <h2>Bookings</h2>
            {EquipmentBookings.map((booking: Booking, index: number) => (
                <div key={booking.id} className="booking">
                    <p>{EquipmentBookings.length - index}</p>
                    <p>Finish at {convertTime(booking.end_date)}</p>
                </div>
            ))}
        </div>
    )
}

export default EquipmentBookingsById;