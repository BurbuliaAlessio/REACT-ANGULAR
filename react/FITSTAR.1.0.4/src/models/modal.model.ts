import { FitnessEquipment } from "./equipment.model";

export interface ModalProps {
    isOpen: boolean;
    equipment: FitnessEquipment;
    duration: number;
    onClose: () => void;
}