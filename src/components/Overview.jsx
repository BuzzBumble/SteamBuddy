import { useState, useEffect } from 'react';
import {useSearchParams} from 'react-router-dom';

function Overview () {
    const [params] = useSearchParams();
    const [summary, setSummary] = useState({});
    const [ownedGames, setOwnedGames] = useState({});
    const steamID = params.get("steamid");
    const url = process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${url}/PlayerSummary?steamid=${steamID}`).then((res) => {
            return res.json();
        }).then((data) => {
            if (data.success) {
                setSummary(data.data);
            }
        });

        fetch(`${url}/GetOwnedGames?steamid=${steamID}`).then((res) => {
            return res.json();
        }).then((data) => {
            if (data.success) {
                setOwnedGames(data.data);
            }
        });
    }, [url, steamID]);

    if (summary.steamID === undefined) {
        return (
            <h1>Waiting</h1>
        )
    } else {
        return (
            <div>
                <h1>Overview for {summary.nickname}</h1>
                <img src={summary.avatar.medium} alt=""/>
            </div>
        );
    }

}

export default Overview;