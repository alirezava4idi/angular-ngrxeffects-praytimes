import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { InfoService } from "../services/info.services";

import * as InfoActions from '../actions/info.actions';
import { EMPTY, catchError, exhaustMap, map, of, switchMap } from "rxjs";

@Injectable()
export class InfoEffects {

    loadInfo$ = createEffect(() => this.actions$.pipe(
        ofType(InfoActions.enter),
        exhaustMap(() => this.infoService.getInfo().pipe(
            switchMap(info => of(
                (InfoActions.loadSuccess({info})),
                InfoActions.status({status: InfoActions.Status.SUCCESS})
            )),
                    
            catchError(() => of(InfoActions.status({status: InfoActions.Status.FAILED})))
        )),
    )
    );



    constructor(private actions$: Actions, private infoService: InfoService){}
}