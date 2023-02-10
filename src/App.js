import { useSelector } from 'react-redux';
import { BsCheckLg } from 'react-icons/bs';
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import "./App.css";

function App() {
    const potentials = useSelector(selectPotentials);
    const currentDisplay = useSelector(selectDisplay);

    return (
        <div className="App font-link">
            <Header />
            <OptionDisplay />
        </div>
    );
}

export default App;
