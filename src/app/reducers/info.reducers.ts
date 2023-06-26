import { Store, createReducer, on } from '@ngrx/store';
import { Info, InfoLoadStatus } from '../models/info.models';
import * as InfoActions from '../actions/info.actions';
import { InfoService } from '../services/info.services';
import { HttpClient } from '@angular/common/http';




const initialState: Info = {
    CityName: '',
    Today: '',
    TodayQamari: '',
    Maghreb: '',
    Midnight: '',
    Noon: '',
    Imsaak: '',
    Sunrise: '',
    Sunset: '',
} 

const initialStatus: InfoLoadStatus = {
    status: InfoActions.Status.PENDING
}


function getInfo(state: Info, payload: any) {
    const today = payload.info.Today.split('-')[0];
    return {...payload.info, Today: today}
}


function changeStatus(state: InfoLoadStatus, payload: InfoLoadStatus)
{
    console.log(payload)
    return {...state, status: payload.status};
}



export const infoReducer = createReducer(
    initialState,
    on(InfoActions.enter, (state) => (state)),
    on(InfoActions.loadSuccess, (state, payload) => (getInfo(state, payload))),
    on(InfoActions.status, (state) => (state))
)

export const infoLoadStatusReducer = createReducer(
    initialStatus,
    on(InfoActions.status, (state, payload) => changeStatus(state, payload)),
)