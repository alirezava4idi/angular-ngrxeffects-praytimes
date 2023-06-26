import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.services';
import { Info, InfoLoadStatus } from '../models/info.models';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as InfoActions from '../actions/info.actions';

@Component({
  selector: 'app-pray',
  templateUrl: './pray.component.html',
  styleUrls: ['./pray.component.scss']
})
export class PrayComponent implements OnInit {

  data: any;

  data$: Observable<Info>;
  status$: Observable<InfoLoadStatus>;

  constructor(private store: Store<{info: Info, status: InfoLoadStatus}>) {
    this.data$ = this.store.select(state => state.info);
    this.status$ = this.store.select(state => state.status);
    this.store.dispatch(InfoActions.status({status: InfoActions.Status.PENDING}))

    // if (this.data$) {
    //   this.store.dispatch(InfoActions.status({status: InfoActions.Status.SUCCESS}))
    // }
  }

  ngOnInit(): void {
    this.store.dispatch(InfoActions.enter());
  }

}
