
import { Link } from "react-router-dom";
import logo from "../images/logo-1.png";

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <ul className="navbar-ul">
                    <li className="navbar-li">
                        <Link to="/"><p>Home</p></Link>
                    </li>
                    <li className="navbar-li">
                        <Link to="/quote"><p>Quote</p></Link>
                    </li>
                    <li className="navbar-li">
                        <Link to="/contact"><p>Contact</p></Link>
                    </li>
                </ul>
            </div>
            <div className="logo">
                    <img src={logo} alt="logo" width="13%"/>
            </div> 
        </div>
    )
};

export default Navbar;