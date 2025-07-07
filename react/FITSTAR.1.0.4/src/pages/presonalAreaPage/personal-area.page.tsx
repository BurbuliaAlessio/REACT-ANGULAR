import { Link, useNavigate } from 'react-router-dom';
import { getToken, getUsername } from '../../services/api';
import { useEffect } from 'react';
import Navbar from '../../components/navbar/navbar.component';
import EquipmentBookingsByUser from '../../components/equipment-booking-by-user/equipment-booking.component';
import { logout } from './presonal-area.logic';
import "./personal-area-page.style.css"

const PersonalAreaPage = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      // Se non c'è uno username, naviga alla pagina di login
      if (!getToken()) {
        navigate('/login');
      }
    }, [navigate]);
  
    return (
      <>
              <Navbar></Navbar>
                  <header className="heading-page-about-us">
                        <div className="overlay">
                          <div className="content">
                          <div className="text-content">
                          {getUsername() ? <h1>Welcome, {getUsername()}</h1> : null}
                            <p>
                              this is you're personal area
                            </p>
                            <Link to="/ourEquipments" className='button'>
                              Book an equipment
                            </Link>
                          </div>
                          </div>
                        </div>
                      </header>
                      <main className='personal-area'>
                      <EquipmentBookingsByUser>
                      
                      </EquipmentBookingsByUser>
                      <button className='button' onClick={() => {logout(); navigate('/login');}}>
                        Logout
                      </button>
                      </main>
      </>
    );
  };
  
export default PersonalAreaPage;