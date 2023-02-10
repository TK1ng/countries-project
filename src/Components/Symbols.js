import { useSelector } from 'react-redux';
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Symbols = () => {
    const currentDisplay = useSelector(selectDisplay);

    return (
        <div className="symbols">
            <div className="stack">
                <h2>Flag of {currentDisplay.name.common}</h2>
                {currentDisplay.flags.png ? (<img src={currentDisplay.flags.png} alt={`Country flag of ${currentDisplay.name.official}`} />) : ('No data')}
            </div>
            <div className="stack">
                <h2>Coat of Arms of {currentDisplay.name.common}</h2>
                {currentDisplay.coatOfArms.png ? (<img src={currentDisplay.coatOfArms.png} alt={`Coat of Arms of ${currentDisplay.name.official}`} />) : ('No data')}
            </div>
        </div>
    );
}

export default Symbols;