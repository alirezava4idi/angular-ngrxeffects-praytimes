import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.services';
import { Info, InfoLoadStatus } from '../models/info.models';
import { Observable, filter, map } from 'rxjs';
import { Store } from '@ngrx/store';

import * as InfoActions from '../actions/info.actions';
import * as candpAnctions from '../actions/cityandprovince.actions';
import { Province } from '../models/province.models';
import { FormControl, FormGroup } from '@angular/forms';

import { LocalService } from '../services/local.services';
import { City } from '../models/city.models';

@Component({
  selector: 'app-pray',
  templateUrl: './pray.component.html',
  styleUrls: ['./pray.component.scss']
})
export class PrayComponent implements OnInit {

  data: any;

  data$: Observable<Info>;
  status$: Observable<InfoLoadStatus>;
  provinces$: Observable<Province[]>;
  province$: Observable<Province>;
  cities$: Observable<City[]>;

  form = new FormGroup({
    pname: new FormControl<string>(''),
    cname: new FormControl()
  })

  pDrawerState = false;
  cDrawerState = false;


  constructor(private store: Store<{info: Info, status: InfoLoadStatus, provinces: Province[], province: Province, cities: City[]}>, private localStorage: LocalService) {
    this.data$ = this.store.select(state => state.info);
    this.status$ = this.store.select(state => state.status);
    this.store.dispatch(InfoActions.status({status: InfoActions.Status.PENDING}))
    

    this.provinces$ = this.store.select(state => state.provinces);

    

    this.cities$ = this.store.select(state => state.cities);


    this.province$ = this.store.select(state => state.province);

  }

  
  setPname(pname: string, code: number) {
    this.form.setValue({pname: pname, cname: ''})
    this.store.dispatch(candpAnctions.choseProvince({province: { Code: code, Name: pname, Country_Code: 1}}))
    // this.provinces$.pipe(
    //   filter(value => )
    //   )
    // .subscribe((v) => console.log(v))
  }


  openPdrawer() {
    this.pDrawerState = true;
  }
  closePdrawer(event: any) {
    setTimeout(() => {
      this.pDrawerState = false;
    }, 100)
  }

  openCdrawer() {
    this.cDrawerState = true;
  }
  closeCdrawer() {
    this.cDrawerState = false;
  }

  ngOnInit(): void {
    this.store.dispatch(InfoActions.enter());
    this.store.dispatch(candpAnctions.getAllProvinces());
    this.store.dispatch(candpAnctions.getAllCities());
   
    

    
  }

}
