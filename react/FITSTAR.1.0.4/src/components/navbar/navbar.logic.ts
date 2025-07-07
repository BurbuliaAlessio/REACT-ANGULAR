import { useState, useEffect } from 'react';

/**
* Toggles the menu visibility and applies/removes the no-scroll effect.
* @param {boolean} isChecked - Indicates if the menu should be visible.
*/
export const toggleMenuVisibility = (isChecked: boolean) => {
    const body = document.body;
    const html = document.documentElement;
    const subBackground = document.getElementById('sub-background');
    
    if (isChecked) {
        html.id = 'no-scroll';
        body.id = 'no-scroll';
        
        if (subBackground) {
            subBackground.classList.add('show');
        }
    } else {
        html.id = '';
        body.id = '';
        
        if (subBackground) {
            subBackground.classList.remove('show');
        }
    }
};

/**
* Custom hook to manage the state of the navigation bar.
* @returns {object} Object containing isChecked state and event handlers.
*/
export const useNavbarLogic = () => {
    const [isChecked, setIsChecked] = useState(false);
    
    useEffect(() => {
        toggleMenuVisibility(isChecked);
    }, [isChecked]);
    
    /**
    * Handles the change event of the checkbox by updating the isChecked state.
    * @param {React.ChangeEvent<HTMLInputElement>} event - The event object of the checkbox change event.
    */
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };
    
    /**
    * Handles the tap/click event of the hamburger menu by toggling the "isChecked" state.
    */
    const handleTap = () => {
        setIsChecked((prev) => !prev);
    };
    
    return { isChecked, handleCheckboxChange, handleTap };
};