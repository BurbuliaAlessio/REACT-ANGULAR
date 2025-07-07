import { useEffect, useState } from "react";
import { getAllBookingByUser, getToken } from "../../services/api";
import { Booking } from "../../models/booking.model";

const useBookingByUser = () => {
    const [bookings, setBookings] = useState<Booking[]>([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const token = getToken() ?? '';
                if (token) {
                    const data = await getAllBookingByUser(token);
                    setBookings(data);
                }
            } catch (error) {
                console.error("Error loading equipments:", error);
            }
        };
        fetchBookings();
    }, []);

    return { bookings };
};
export default useBookingByUser;