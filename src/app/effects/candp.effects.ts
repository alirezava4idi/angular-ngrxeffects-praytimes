import { Injectable } from '@angular/core';
import {  Actions,createEffect, ofType } from '@ngrx/effects';
import { CandPService } from '../services/candp.services';
import * as CandPActions from '../actions/cityandprovince.actions';

import { EMPTY, catchError, exhaustMap, map, of, switchMap } from "rxjs";

@Injectable()
export class CandPEffects {
    

    $loadProvinces = createEffect(() => this.actions$.pipe(
        ofType(CandPActions.getAllProvinces),
        exhaustMap(() => this.candpService.getAllProvinces().pipe(
            switchMap(provinces => of(
                (CandPActions.getProvincesSuccess({ data: provinces }))
            )),

            catchError(() => EMPTY)
        ))
        
    ))

    constructor(private actions$: Actions, private candpService: CandPService){}
}