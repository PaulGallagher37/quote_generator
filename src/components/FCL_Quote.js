import Navbar from "./Navbar";

function FCL_Quote() {
    return(
        <div>
            <Navbar />
            <div className="quote-container">
                <h1>FCL Quote</h1>
                <div>
                    <h2>Route</h2>
                    <label>Origin:</label>
                    <input placeholder="Enter city or port"></input>
                    <label>Destination:</label>
                    <input placeholder="Enter city or port"></input>
                </div>
                <div>
                    <h2>Cargo Details</h2>
                    <label>Number of containers</label>
                    <input></input>
                    <label>Weight:</label>
                    <input></input>
                </div>
                <div>
                    <input type="checkbox"></input>
                    <label>Considered dangerous or hazardous</label>
                </div>
                <button>Get Quote</button>
            </div>  
        </div>
    )
};

export default FCL_Quote;