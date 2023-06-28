import { createReducer, on} from '@ngrx/store';
import * as CandPActions from '../actions/cityandprovince.actions';
import { City } from '../models/city.models'
import { Province } from '../models/province.models'
import { LocalService } from '../services/local.services';



const localStorage = new LocalService();

const initialCityState: City = {
    Code: 1,
    Name: 'تهران',
    Province_Code: 0
};
const initialProvinceState: Province = {
    Code: 0,
    Name: 'تهران',
    Country_Code: 0
};
const initaialCitiesOfProvince: City[] = [];
const initialCities: City[] = [];

function getCity(state: City, code: number) {
    return state
}

function setAllProvencesCities(state: City[], provinceCode: number) {

    return state
}

function setProvince(state: Province, province: Province) {
    return {...province}
}


function showProvinces(state: Province[], payload: any)
{
    const data = localStorage.getData('province');
    if( data === null ){
        localStorage.saveData('province', JSON.stringify(payload.data));
        return payload.data
    } else {
        return JSON.parse(data)
    }

}



function setAllCities(state: City[], payload: City[])
{
    const data = localStorage.getData('cities');
    if (data === null)
    {
        localStorage.saveData('cities', JSON.stringify(payload))
        return payload
    }else {
        return JSON.parse(data)
    }
}


export const cityReducer = createReducer (
    initialCityState,
    on(CandPActions.choseCity, (state, {code}) => (getCity(state, code)))
)

export const allCitiesReducer = createReducer(
    initialCities,
    on(CandPActions.getAllProvinceCities, (state) => (state))
)

export const setAllCitiesReducer = createReducer(
    initialCities,
    on(CandPActions.getCititesSuccess, (state, {cities}) => setAllCities(state, cities))
)

export const citiesReducer = createReducer (
    initaialCitiesOfProvince,
    on(CandPActions.getAllProvinceCities, (state, {provinceCode}) => (setAllProvencesCities(state, provinceCode))),
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

