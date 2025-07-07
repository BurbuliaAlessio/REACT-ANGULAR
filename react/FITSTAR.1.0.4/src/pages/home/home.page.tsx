import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.component";
import EquipmentsCards from "../../components/equipments-cards/equipments-cards.component";

import './home.style.css';
import Footer from "../../components/footer/footer.component";


const Home = () => {
  return (
    <>
    <Navbar />
    <header className="heading-page-home">
      <div className="overlay">
        <div className="content">
        <div className="text-content">
          <h1>Welcome to Fitstar</h1>
          <p>
            YOU ARE THE MAIN CHARACTER 
          </p>
          <Link to="/Login" className="button">
            UPGRADE YOUR FITNESS
          </Link>
        </div>
        </div>
      </div>
    </header>
    
    <main>
    {/* Section 1: Welcome and Gym Features */}
    <section className="introduction sig-in">
      <figure>
        <img src="/pages-images/home-images/custom-train-image.jpg" alt="an image of a gym with a custom train" />
      </figure>
      <article className="container">
        <h2>
          Personalized Training
        </h2>
        <p>
          Tailored workouts for your goals and level.
          Discover your potential with expert guidance.
        </p>
        <Link to="/Login" className="button">
          Sign In
        </Link>
      </article>
    </section>

    <section className="our-hours">
      <h2>Opening Hours</h2>
      <ul>
        <li>
          <div>
              06:00 AM - 11:00 PM
          </div>
          <div>
              Monday - Friday
          </div>
        </li>
        <li>
          <div>
              08:00 AM - 8:00 PM
          </div>
          <div>
              Saturday - Sunday
          </div>
        </li>      
      </ul>
    </section>

    <section className="our-machines-home">
      <h2>Our Machines</h2>
      <EquipmentsCards/>
    </section>
    </main>
    <Footer>
    </Footer>
    </>
  );
}

export default Home;