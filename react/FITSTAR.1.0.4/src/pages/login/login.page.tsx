import "./login.style.css";

import Navbar from "../../components/navbar/navbar.component";

import { Link, useNavigate } from "react-router-dom";
import { useLoginLogic } from "./login.logic";
import { useEffect } from "react";
import { getToken } from "../../services/api";

const Login = () => {
    const { formData, handleChange, handleSubmit, error } = useLoginLogic();
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
        <main className="form-login">
        
        <div className="message-form">
            <p>
                To prenote our machine or to see your 
                personal information you need to be logged in.
            </p>
        </div>

        <div className="container">
            <h2 className="header-login">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="group">
                    <label htmlFor="username">
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
                    <label htmlFor="password">
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
                {error  &&  <div className="error">
                                <p>{error}</p>
                            </div>}
                <div className="link-box">
                    <Link to="/register" className="link">
                        You not have an account? Register
                    </Link>
                </div>
            <button
            type="submit"
            className="button"
            >
            Login
            </button>
            </form>
        </div>
        </main>
        </>
    );
};

export default Login;
