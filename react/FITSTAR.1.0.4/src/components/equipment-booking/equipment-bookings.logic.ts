import { useEffect, useState } from "react";
import { getBookingByEqId } from "../../hooks/use-equipment.api";
import { Booking } from "../../models/booking.model";

export const useEquipmentsBookings = (id: number) => {
    const [EquipmentBookings, setEquipmentBookings] = useState<Booking[]>([]);

    useEffect(() => {
            /**
             * Fetches equipments data from the API and updates the state.
             * Logs an error message in case of a failure.
             */
            const fetchBookings = async () => {
                try {
                    const data = await getBookingByEqId(id);
                        setEquipmentBookings(data);
                } catch (error) {
                    console.error("Error loading equipments:", error);
                }
            };
            fetchBookings();
        }, []);

    return {EquipmentBookings};
};

export default useEquipmentsBookings;