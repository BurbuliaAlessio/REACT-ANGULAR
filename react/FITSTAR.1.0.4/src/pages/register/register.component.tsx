import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import { useRegisterLogic } from "./register.logic";
import { useEffect } from "react";
import { getToken } from "../../services/api";

const Register = () => {
    
    const { formData, handleChange, handleSubmit, error } = useRegisterLogic();
    
    const navigate = useNavigate();
    
    useEffect(() => {
        if (getToken()){
            navigate('/personalArea');
        }
    }, [navigate]);
    
    return (
        
        <>
        <Navbar>
        </Navbar>
        <main className="form-register">
        
        <div className="container">
        <h2 className="header">Register</h2>
        <form onSubmit={handleSubmit}>
        <div className="group">
        <label htmlFor="username" className="block text-gray-700 font-medium">
        username
        </label>
        
        <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="username"
        placeholder="Enter your username"
        />
        </div>
        <div className="group">
        <label htmlFor="password" className="block text-gray-700 font-medium">
        Password
        </label>
        <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="password"
        placeholder="Enter your password"
        />
        </div>
        {error && <div className="error">{error}</div>}
        <div className="link-box">
        <Link to="/login" className="link">
        You have an account? Log in
        </Link>
        </div>
        <button
        type="submit"
        className="button"
        >
        Register
        </button>
        </form>
        </div>
        </main>
        </>
    )
}

export default Register;