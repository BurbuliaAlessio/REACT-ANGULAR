import { Link } from 'react-router-dom';
import { useNavbarLogic } from './navbar.logic';

import './navbar.style.css';

/**
 * A navigation bar component that renders the main navigation menu
 * of the website. It is responsive and can be toggled on and off
 * by clicking on the hamburger menu icon or by tapping on the
 * background overlay.
 *
 * @returns {JSX.Element} The navigation bar component
 */

export const Navbar = () => {

  const { isChecked, handleCheckboxChange, handleTap } = useNavbarLogic();
  
  return (
  <nav aria-label="Navigazione principale" role="navigation">
    <div className="menuToggle">
      <div
        id="sub-background"
        onClick={handleTap}
        className="background-overlay"
      ></div>
    
      <input
        type="checkbox"
        id="menuCheckbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

    <span></span>
    <span></span>
    <span></span>
    
      <div className="hamburger-background">
        <Link to="/" className="logo">
        <img src="/logo/logo.png" alt="a logo of FitStar" />
        </Link>
      </div>
    

      <div className="menu">
        <Link to="/index.html" className="logo">
          <figure className="logo img-container">
            <img src="/logo/logo.png"
            alt="logo about our gym FitStar" loading="lazy" width="300" height="150" />
          </figure>
        </Link>
      
        <ul className="nav-list">
        
          <li>
            <Link to="/">
              HOME
            </Link>
          </li>
        
          <li>
            <Link to="/ourEquipments">
              OUR EQUIPMENTS
            </Link>
          </li>
        
          <li>
            <Link to="/aboutUs">
              ABOUT US
            </Link>
          </li>        
          <li>
            <Link to="/personalArea">
              PERSONAL AREA
            </Link>
          </li>       
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;