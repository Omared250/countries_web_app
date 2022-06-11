import { API_URL_ALLCOUNTRIES, API_URL_COUNTRIESBYREGION, API_URL_COUNTRYBYNAME } from "./config.js";
import { AJAX } from "./helper.js";

export const state = {
    countries : {
        region : '',
        allCountries : [],
        countriesByRegion : [],
        results : {
            query : '',
            countryResult : [],
        }
    },
}

const countryObject = function(cty) {
    return  {
        name : cty.name.common,
        flag : cty.flags.png,
        region : cty.region,
        population : cty.population,
        capital : cty.capital,
    }
}

export const loadAllCountries = async function(region = 'all') {
    try {
        state.countries.region = region;

        const data = await AJAX(`${API_URL_ALLCOUNTRIES}${state.countries.region}`);

        state.countries.allCountries = data.map(cty => {
            return countryObject(cty)
        })
    } catch (err) {
        throw err;
    }
};

export const loadCountryByRegion = async function(region) {
    try {
        state.countries.region = `${region}`;

        const data = await AJAX(`${API_URL_COUNTRIESBYREGION}${state.countries.region}`);

        state.countries.countriesByRegion = data.map(cty => {
            return countryObject(cty)
        });
        console.log(state);
    } catch (err) {
        throw err;
    }
};

export const loadCountryByName = async function(name) {
    try {
        state.countries.results.query = name;

        const data = await AJAX(`${API_URL_COUNTRYBYNAME}${state.countries.results.query}`);

        state.countries.results.countryResult = data.map(cty => {
            return countryObject(cty);
        });
        console.log(state);
    } catch (err) {
        throw err;
    }
}