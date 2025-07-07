import { ReactElement } from 'react';
import { FitnessEquipment} from '../../models/equipment.model.ts';
import EquipmentsCardsLogic from './equipments-card.logic.ts';

import './equipments-cards.style.css';
import { Link } from 'react-router-dom';

/**
 * A component that renders a container of machine cards.
 *  
 * @returns {ReactElement} A div with the class "machine-card-container" containing
 *  a list of machine cards. Each machine card is a div with the class "machine-card"
 *  containing an image, claim, price and name of a fitness equipment.
 *  The image is an img element with the class "machine-image", the claim is a p
 *  element with the class "claim", the price is a p element with the class "price"
 *  and the name is an h2 element.
 */ 
const EquipmentsCards = (): ReactElement => {
    // Retrieves the list of fitness equipment from the API
    const { equipments } = EquipmentsCardsLogic();
    
    return (
        // The container of machine cards
        <div className="machine-card-container">
            {equipments.map((equipment: FitnessEquipment) => (
                <div key={equipment.id} className="machine-card">
                    {/* <div dangerouslySetInnerHTML={{ __html: equipment.icon }}></div> */}
                    {/* The image of the machine*/}
                    <img src={equipment.image} alt={equipment.name} className="machine-image"/>
                        
                    {/* The claim of the machine*/}
                    <p className='claim'>{(equipment.claim).toUpperCase()}</p>

                    {/* The price of the machine*/}
                    <p className='price'>
                        {equipment.pricePerMinute.toFixed(2)} 
                        <span className='currency'>euro for minutes</span>
                    </p>

                    {/* The name of the machine*/}
                    <h2>{equipment.name}</h2>
                    <Link 
                    to={`/ourEquipments/${equipment.id}`}
                    state={equipment}
                    className="button">
                        book
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default EquipmentsCards;