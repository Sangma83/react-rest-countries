import CountryData from "../countryData/CountryData";

const CountryDetail = (props) => {
    // const {country, handleVisitedCountries, handleVisitedFlags} = props;
    return (
        <div>
            <h4>Country Details: </h4>
            <hr/>
            {/* <CountryData
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            ></CountryData> */}

            <CountryData {...props}></CountryData>  {/**multiple props er jonno emn kore use korbo eke prop drilling bole */}
        </div>
    );
};

export default CountryDetail;