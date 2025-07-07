import useBookingByUser from "./equipment-booking.logic";
import convertTime from '../equipment-booking/date.script';
import useEquipments from "../equipments-cards/equipments-card.logic";


const EquipmentBookingsByUser = () => {
    const { bookings  } = useBookingByUser();
    const { equipments } = useEquipments()
    return (
        <div className="bookings-container">
        <h2>your Bookings</h2>
        <div>
        {bookings && bookings.length > 0 ? (
            bookings.map((booking, index) => (
                <div className="booking">
                <p>{index + 1}</p>
                <p className="strong">{equipments.find(equipment => equipment.id === booking.equipment_id)?.name}</p>
                <p>start at: {convertTime(booking.start_date)}</p>
                <p>finish at: {convertTime(booking.end_date)}</p>
        </div>))) 
        : 
            <p className="booking">you not have bookings</p>}
        </div>
        </div>
    )
}

export default EquipmentBookingsByUser;