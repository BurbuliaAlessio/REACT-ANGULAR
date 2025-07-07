/**
 * Interface for a Fitness Equipment Item.
 */
export interface FitnessEquipment {
    id: number;                // Unique identifier for the item
    name: string;              // Name of the equipment
    claim: string;             // Marketing claim or tagline for the equipment
    icon: string;              // SVG icon as a string
    image: string;             // URL of the equipment image
    pricePerMinute: number;    // Price per minute for using the equipment
}