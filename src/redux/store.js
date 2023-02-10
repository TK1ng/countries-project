import { configureStore } from "@reduxjs/toolkit";
import displayCountryReducer from "./slices/displayCountrySlice";
import potentialCountriesReducer from './slices/potentialCountriesSlice';

export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayCountry: displayCountryReducer
    }
});