import './equipments-page.style.css';

import Footer from "../../components/footer/footer.component";
import Navbar from "../../components/navbar/navbar.component";
import EquipmentsCards from '../../components/equipments-cards/equipments-cards.component';
import { Link } from "react-router-dom";
import { getToken, getUsername } from '../../services/api';

export const EquipmentsPage = () => {

  const token = getToken();
  const username = getUsername();
    return (
        <>
        <Navbar></Navbar>
            <header className="heading-page-our-equipments">
                  <div className="overlay">
                    <div className="content">
                    <div className="text-content">
                      <h1>Our equipment</h1>
                        <p>
                          you can prenote an equipment
                        </p>
                      {!token ? (
                        <Link to="/login" className="button">
                          Login
                        </Link>
                      ) : (
                        <p className="username">Welcome {username}</p>
                      )}
                    </div>
                    </div>
                  </div>
                </header>
        <main>
            {/* New Section: Our Mission */}
            <section className="our-machines-equipments-page">
            <EquipmentsCards/>
            </section>
        </main>
        <Footer>

        </Footer>
        </>
    );
} 