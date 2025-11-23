import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="home-container">
                <div className="home-text-container">
                    <h1 className="home-h1">Why use KRL?</h1>
                    <h2 className="home-h2">We are one of the UK’s most trusted freight forwarders and shipping companies.</h2>
                    <p className="home-p">Bespoke Shipping Quotes – Quick and Free – Talk to Us Now</p>
                    <p className="home-p">Network of Global Agents & Trusted Freight Forwarder</p>
                    <p className="home-p">All Worldwide Sea Ports & All Worldwide Airports</p>
                    <p className="home-p">Any Type of Cargo – Hazardous, Abnormal Loads</p>
                    <p className="home-p">Full Container Loads (FCL) & Less Container Loads (LCL)</p>
                    <Link to="quote"><button className="home-button">Get Quote</button></Link>
                </div>
            </div>
        </div>
    )
};

export default Home;