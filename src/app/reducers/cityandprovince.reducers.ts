import { createReducer, on} from '@ngrx/store';
import * as CandPActions from '../actions/cityandprovince.actions';
import { City } from '../models/city.models'
import { Province } from '../models/province.models'


const initialCityState: City = {
    Code: 0,
    Name: '',
    Province_Code: 0
};
const initialProvinceState: Province = {
    Code: 0,
    Name: '',
    Country_Code: 0
};

function getCity(state: City, code: number) {
    return state
}

function getProvince(state: Province, code: number) {
    return state
}

export const  cityReducer = createReducer (
    initialCityState,
    on(CandPActions.choseCity, (state, {code}) => (getCity(state, code)))
)

function showProvinces(state: Province, payload: any)
{
    console.log(payload)
    return state
}

export const  provinceReducer = createReducer (
    initialProvinceState,
    on(CandPActions.choseCity, (state, {code}) => (getProvince(state, code))),
    on(CandPActions.getProvincesSuccess, (state, payload) => (showProvinces(state, payload)))
)