import Navbar from "./Navbar";

function Quote() {
    return(
        <div>
            <Navbar />
            <div className="contact-container">
                <div>
                    <label>Pallets/Cartons:</label>
                    <input></input>
                </div>
                <div>
                    <label>Weight:</label>
                    <input></input>
                </div>
                <div>
                    <label>CBM:</label>
                    <input></input>
                </div>
            </div>  
        </div>
    )
};

export default Quote;