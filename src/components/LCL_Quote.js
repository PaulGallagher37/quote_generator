import Navbar from "./Navbar";

function LCL_Quote() {
    return(
        <div>
            <Navbar />
            <div className="quote-container">
                <h1>LCL Quote</h1>
                <div>
                    <h2>Route</h2>
                    <label>Origin:</label>
                    <input placeholder="Enter city or port"></input>
                    <label>Destination:</label>
                    <input placeholder="Enter city or port"></input>
                </div>
                <div>
                    <h2>Cargo Details</h2>
                    <label>Quantity:</label>
                    <input></input>
                    <label>Weight:</label>
                    <input></input>
                    <label>CBM:</label>
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

export default LCL_Quote;