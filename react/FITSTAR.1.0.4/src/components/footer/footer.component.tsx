import { Link } from "react-router-dom";
import "./footer.style.css";

const Footer = () => {
    return (
<footer className="footer bg-gray-800 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p>1/b Fitness Street</p>
          <p>Health City, Turin 10127</p>
          <p>Email: burbuliaalessio@gmail.com</p>
          <p>Phone: +39 388 427 4489</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/login" className="hover:underline">Sign In</Link></li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
          <ul className="space-y-2">
            <li>Monday - Friday: 6:00 AM - 11:00 PM</li>
            <li>Saturday - Sunday: 8:00 AM - 8:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Fitstar. All rights reserved.</p>
      </div>
    </footer>
    )
}

export default Footer;