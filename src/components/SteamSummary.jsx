
function SteamSummary(props) {
    return (
        <div>
            <h1>Is this you?</h1>
            <h2>{props.summary.nickname}</h2>
            <img src={props.summary.avatar.medium} alt=""></img>
            
        </div>
    );
   
}

export default SteamSummary;