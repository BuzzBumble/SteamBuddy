import { useState } from 'react';
import { Link } from "react-router-dom";
import SteamIDForm from "./SteamIDForm";
import SteamSummary from "./SteamSummary";


function SteamLookup() {
    const [ summary, setSummary ] = useState({});
    const [ showSummary, setShowSummary ] = useState(false); 

    function fetchSummary(steamid) {
        const url = process.env.REACT_APP_API_URL;
        fetch(`${url}/PlayerSummary?vanity=${steamid}`).then((res) => {
            return res.json();
        }).then((data) => {
            if (data.success) {
                setSummary({...data.data, found: true});
                setShowSummary(true);
            } else {
                setSummary({ found: false });
            }
        });
    }

    return (
        <div>
            <SteamIDForm fetchSummary={fetchSummary}/>
            <div>{summary.steamID}</div>
            { summary.found ?
                <SteamSummary summary={summary} isShowing={showSummary} />
            :
                summary.found !== undefined && <h1>Not Found</h1>
            }
            { showSummary ? <Link to={{
                    pathname: "/overview",
                    search: `?steamid=${summary.steamID}`
                }}>
                        Continue
                </Link> : ""}
        </div>
    );
};

export default SteamLookup;