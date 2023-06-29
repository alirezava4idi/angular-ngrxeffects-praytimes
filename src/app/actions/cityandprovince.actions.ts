import { createAction, props } from '@ngrx/store';
import { City } from '../models/city.models';
import { Province } from '../models/province.models';
import { Observable } from 'rxjs';



export const choseProvince = createAction(
    '[PRAY] Chose a Province',
    props<{province: Province}>()
)

export const getAllProvinces = createAction(
    '[PRAY] get all provinces',
)

export const getAllCities = createAction(
    '[PRAY] get all Cities',
)

export const getProvincesSuccess = createAction(
    '[PRAY] Loading of Provinces Successfull',
    props<{data: any}>()
)

export const getCititesSuccess = createAction(
    '[PRAY] Loading of Cities Successfull',
    props<{cities: any}>()
)

export const getAllProvinceCities = createAction(
    '[PRAY] Get All Province Cities',
    props<{allCities: City[], provinceCode: number}>()
)


export const choseCity = createAction(
    '[PRAY] Chose a City',
    props<{code: number | undefined}>()
)