import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
    const currentDisplay = useSelector(selectDisplay);

    return (
        <div className="stack">
            <h1>{currentDisplay.name.official}</h1>
            <h2>Common name: {currentDisplay.name.common}</h2>
            <p>Capital city: {currentDisplay.capital}</p>
            <p>Current population: {currentDisplay.population}</p>
            <p>Continent: {currentDisplay.continents}</p>
            <p>Independent: {currentDisplay.independent ? "Yes" : "No"}</p>
            <p>Landlocked: {currentDisplay.landlocked ? "Yes" : "No"}</p>
            <p>Member of UN: {currentDisplay.unMembe ? "Yes" : "No"}</p>
        </div>
    );
}

export default Overview;