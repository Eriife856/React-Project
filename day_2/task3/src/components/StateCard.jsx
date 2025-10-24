function StateCard({state, capital, region, population, isPopular}){
    const regionState ={
    'North': `#8B4513`,
    'South': `#008751`,
    'East': `#FFD700`,
   'West': `#4169E1`,
    };
    return(
        <div className={`state-card ${isPopular ? "popular" : ''}`} style={{backgroundColor: regionState[region] }}>
            <h2>{state}</h2>
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population.toLocaleString()}</p>
    <p className={`stockStatus ${isPopular ? "popular" : ""}`}>
        {isPopular}
    </p>

        </div>
    );
}
export default StateCard;