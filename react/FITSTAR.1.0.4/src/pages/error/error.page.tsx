import { Link } from 'react-router-dom';
import './error.style.css';  // Ensure you import the styles

const ErrorPage = () => {

  return (
    <div className='background-error'>
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="home-button">Go to Homepage</Link>
      </div>
    </div>
    </div>
  );
};

export default ErrorPage;