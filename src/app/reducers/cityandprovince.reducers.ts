import { createReducer, on} from '@ngrx/store';
import * as CandPActions from '../actions/cityandprovince.actions';
import { City } from '../models/city.models'
import { Province } from '../models/province.models'
import { LocalService } from '../services/local.services';



const localStorage = new LocalService();
const localProvince = localStorage.getData('province');
const localProvinces = localStorage.getData('provinces');
const localCities = localStorage.getData('allCities');

let initialCityState: City = {
    Code: 0,
    Name: 'تهران',
    Province_Code: 0,
    Country_Code: 1
};

let initialProvinceState: Province = {
    Code: 0,
    Name: 'تهران',
    Country_Code: 1
};

if (localProvince !== null && localCities !== null)
{
    const province = JSON.parse(localProvince);
    const cities = JSON.parse(localCities);
    const provinceCities = cities.filter((p: City) => p.Province_Code === province.Code)
 

    initialCityState = {
        Code: provinceCities[0].Code,
        Name: provinceCities[0].Name,
        Province_Code: provinceCities[0].Province_Code,
        Country_Code: provinceCities[0].Country_Code
    }



    initialProvinceState = {
        Code: province.Code,
        Name: province.Name,
        Country_Code: province.Country_Code
    }
}




const initaialCitiesOfProvince: City[] = [];
const initialCities: City[] = [];

function getCity(state: City, code: number | undefined) {
    if(code === undefined) {
        const localProvince = localStorage.getData('province');
        if (localProvince !== null && localCities !== null) {
            
            const province = JSON.parse(localProvince);
            const cities = JSON.parse(localCities);
            const provinceCities = cities.filter((p: City) => p.Province_Code === province.Code)

            console.log(province)

            return {
                Code: provinceCities[0].Code,
                Name: provinceCities[0].Name,
                Province_Code: provinceCities[0].Province_Code,
                Country_Code: provinceCities[0].Country_Code
            }
        } else {
            return state
        }
    } else {
        // here is if chose another city
        return state
    }
}


function setProvince(state: Province, province: Province) {
    localStorage.saveData('province', JSON.stringify(province))
    return province
}


function showProvinces(state: Province[], payload: any)
{
    const data = localStorage.getData('provinces');
    if( data === null ){
        localStorage.saveData('provinces', JSON.stringify(payload.data));
        return payload.data
    } else {
        return JSON.parse(data)
    }

}



function setAllCities(state: City[], payload: City[])
{
    const data = localStorage.getData('allCities');
    if (data === null)
    {
        localStorage.saveData('allCities', JSON.stringify(payload))
        return payload
    }else {
        return JSON.parse(data)
    }
}


function provinceCities(state: City[], allCities: City[], provinceCode: number ) {
    const cities = allCities.filter(city => (city.Country_Code === 1 && city.Province_Code === provinceCode))
    localStorage.saveData('provinceCities', JSON.stringify(cities))
    return cities
}

export const cityReducer = createReducer (
    initialCityState,
    on(CandPActions.choseCity, (state, {code}) => (getCity(state, code)))
)

export const allProvinceCities = createReducer(
    initialCities,
    on(CandPActions.getAllProvinceCities, (state, {allCities, provinceCode}) => (provinceCities(state, allCities, provinceCode)))
)

export const setAllCitiesReducer = createReducer(
    initialCities,
    on(CandPActions.getCititesSuccess, (state, {cities}) => setAllCities(state, cities))
)




const initailProvinces: Province[] = [];

export const  provinceReducer = createReducer (
    initialProvinceState,
    on(CandPActions.choseProvince, (state, {province}) => (setProvince(state, province))),
)

export const provincesReducer = createReducer (
    initailProvinces,
    on(CandPActions.getProvincesSuccess, (state, payload) => (showProvinces(state, payload)))
)

