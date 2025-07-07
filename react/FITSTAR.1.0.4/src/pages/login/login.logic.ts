import { useState } from "react";
import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

/**
* A custom hook that manages the state of the login form and handles form submissions.
* It provides the following:
* - formData: an object containing the input fields' values
* - setFormData: a function to update the formData state object
* - error: a string containing the error message if any input field is empty
* - setError: a function to update the error message
* - handleChange: a function to handle changes to input fields
* - handleSubmit: a function to handle form submissions and validate the input fields
*/
export const useLoginLogic = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    
    const [error, setError] = useState("");
    
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
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        
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
            await login(formData.username, formData.password);
            navigate('/personalArea');
            
            setError("");
        } catch (error) {
            setError(error instanceof Error ? error.message : "Unexpected error occurred");
        }
    };
    return { formData, setFormData, error, setError, handleChange, handleSubmit };
}
