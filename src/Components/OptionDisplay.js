import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPotentials } from '../redux/slices/potentialCountriesSlice';
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
    const dispatch = useDispatch();
    const currentPotentials = useSelector(selectPotentials);

    return <div className="stack">
        {currentPotentials.map((option, index) => <h2 key={index} onClick={() => { dispatch(setDisplayCountry(option)) }}>{option.name.common}</h2>)}
    </div>;
};

export default OptionDisplay;
