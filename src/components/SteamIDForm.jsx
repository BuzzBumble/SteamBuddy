import {useState} from "react";

function SteamIDForm(props) {

    const [steamID, setSteamID] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        props.fetchSummary(steamID);
    }

    return (
        <form onSubmit={handleSubmit} action="#">
            <div>
                <label>Steam Profile URL: 
                    <input type="text" className="steamIDInput" name="steamID" onChange={e => setSteamID(e.target.value)}></input>
                </label>
            </div>
            <button type="submit">Search</button>
        </form>
    );
}

export default SteamIDForm;