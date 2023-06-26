import { createAction, props } from '@ngrx/store'; 

export enum Status {
    PENDING,
    SUCCESS,
}


export const enter = createAction(
    '[Pray] Enter The Page',
)

export const loadSuccess = createAction(
    '[Pray] Info Loaded Succussfully',
    props<{info: any}>()
)

export const status = createAction(
    '[Pray] Loading Status',
    props<{status: Status}>()
)


export const changeCity = createAction (
    '[Pray] Change City',
)