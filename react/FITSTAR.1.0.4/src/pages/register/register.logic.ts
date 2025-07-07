import { useState } from "react";
import { register } from "../../services/api";
import { useNavigate } from "react-router-dom";

/**
 * A custom hook to manage the state of the register form and handle form submissions.
 * It provides the following:
 * - formData: an object containing the input fields' values
 * - setFormData: a function to update the formData state object
 * - error: a string containing the error message if any input field is empty
 * - setError: a function to update the error message
 * - handleChange: a function to handle changes to input fields
 * - handleSubmit: a function to handle form submissions and validate the input fields
 */
export const useRegisterLogic = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    
    const [error, setError] = useState("");

    const navigate = useNavigate(); 
    
    /**
     * Updates the formData state with the input field's current value.
     * 
     * @param {React.ChangeEvent<HTMLInputElement>} e - The event object from the
     * input change event, containing the input's name and value.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }
    
    /**
     * Handles the form submission event by validating the input fields and
     * setting an error message if any field is empty.
     * If all fields are filled in, attempts to register with the provided username and password
     * and handles any registration errors.
     * @param {React.FormEvent<HTMLFormElement>} e - The event object from the
     * form submission event.
     */
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!formData.username || !formData.password) {
            setError("Please fill in all fields");
            return;
        }

        if (!formData.username || !formData.password) {
            setError("Please fill in all fields");
        return;

        } else if (!/^[a-zA-Z0-9]+$/.test(formData.username)) {
            setError("The username contains invalid characters");
        return;

        } else if (!/^[a-zA-Z0-9]+$/.test(formData.password)) {
            setError("The password contains invalid characters");
        return;

        } try {
            await register(formData.username, formData.password);
            
            setTimeout(() => {
                navigate('/personalArea');
            }, 1000);
    
            setError(""); // Clear any existing errors
        } catch (error) {
            setError(error instanceof Error ? error.message + "the account already exists" : "An unexpected error occurred");
        }
    };
    
    return { formData, setFormData, error, setError, handleChange, handleSubmit };
}