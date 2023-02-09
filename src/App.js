import { useSelector } from 'react-redux';
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import "./App.css";

function App() {
    const potentials = useSelector(selectPotentials);

    return (
        <div className="App font-link">
            <Header />
            <OptionDisplay />
        </div>
    );
}

export default App;
