import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from '../redux/slices/potentialCountriesSlice';

const OptionDisplay = () => {
    const currentPotentials = useSelector(selectPotentials);

    return <div className="stack">
        {currentPotentials.map((option, index) => <h2 key={index}>{option.name.common}</h2>)}
    </div>;
};

export default OptionDisplay;
