import { useState } from 'react';
import './Country.css';
import CountryDetail from '../countryDetail/CountryDetail';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry);

    return (
        // <div className={`country ${visited && 'visited'}`}>
        <div className={`country ${visited ? 'visited' : 'not-visited'}`}>
           <h3 style={{color: visited? 'white' : 'black'}}>Name: {name?.common}</h3> 
           <img src={flags.png} alt="" />
           <p>population: {population}</p>
           <p>area: {area}</p>
           <p><small>Code: {cca3}</small></p>
           <button onClick={() => handleVisitedCountries(country)}>Marked</button><br></br>
           <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button><br></br>
           <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
           {visited ? 'I have visited this place' : 'I want to go'}
           <hr></hr>
           <CountryDetail
           country={country}
           handleVisitedCountries={handleVisitedCountries}
           handleVisitedFlags={handleVisitedFlags}
           ></CountryDetail>
        </div>
        
    );
};

export default Country;