import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="home-container">
                <div className="home-text-container">
                    <h1 className="home-h1">Seafreight Quote Generator</h1>
                    <p className="home-p">Get a quick and simple seafreight quote from anywhere in the world!</p>
                    <p className="home-p">Get a quick and simple seafreight quote from anywhere in the world!</p>
                    <p className="home-p">Get a quick and simple seafreight quote from anywhere in the world!</p>
                    <Link to="quote"><button className="home-button">Get Quote</button></Link>
                </div>
            </div>
        </div>
    )
};

export default Home;