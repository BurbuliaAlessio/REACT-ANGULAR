import { useEffect, useState } from "react";
import { getEquipments } from "../../hooks/use-equipment.api";
import { FitnessEquipment } from "../../models/equipment.model";


export const useEquipments = (): { equipments: FitnessEquipment[] } => {
    // State to store the list of fitness equipments
    const [equipments, setEquipments] = useState<FitnessEquipment[]>([]);
    
    useEffect(() => {
        /**
         * Fetches equipments data from the API and updates the state.
         * Logs an error message in case of a failure.
         */
        const fetchEquipments = async () => {
            try {
                const data = await getEquipments();
                setEquipments(data);
            } catch (error) {
                console.error("Error loading equipments:", error);
            }
        };
        fetchEquipments();
    }, []);

    // Return the equipments state
    return { equipments };
};

export default useEquipments;