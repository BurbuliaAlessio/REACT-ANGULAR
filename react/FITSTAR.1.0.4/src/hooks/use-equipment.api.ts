import { Booking } from "../models/booking.model";
import { fetchFromApi } from "../services/api";

export const getEquipments = () => fetchFromApi('equipment');

export const getBookingByEqId = async (id: number): Promise<Booking[]> => {
    try {
      const data = await fetchFromApi('equipment-bookings');
      return data.filter((bookings: Booking) => bookings.equipment_id === id);
    } catch (error) {
      console.error('Error in bookingByIdEquipment:', error);
      return [];
    }
};