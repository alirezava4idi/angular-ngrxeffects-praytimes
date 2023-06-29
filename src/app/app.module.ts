import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrayComponent } from './pray/pray.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { infoLoadStatusReducer, infoReducer } from '../app/reducers/info.reducers';
import { provinceReducer, provincesReducer, setAllCitiesReducer, allProvinceCities } from '../app/reducers/cityandprovince.reducers';
import { HttpClientModule } from '@angular/common/http';
import { InfoEffects } from './effects/info.effects';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CandPEffects } from './effects/candp.effects';

@NgModule({
  declarations: [
    AppComponent,
    PrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ info: infoReducer, status: infoLoadStatusReducer, provinces:  provincesReducer, province: provinceReducer, cities: setAllCitiesReducer, provinceCities: allProvinceCities }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([InfoEffects, CandPEffects]),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
