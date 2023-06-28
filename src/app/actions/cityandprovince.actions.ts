import { createAction, props } from '@ngrx/store';
import {} from '../models/city.models';
import {} from '../models/province.models';



export const choseProvince = createAction(
    '[PRAY] Chose a Province',
    props<{code: number}>()
)

export const getAllProvinces = createAction(
    '[PRAY] get all provinces',
)

export const getAllCities = createAction(
    '[PRAY] get all cities',
)


export const choseCity = createAction(
    '[PRAY] Chose a City',
    props<{code: number}>()
)