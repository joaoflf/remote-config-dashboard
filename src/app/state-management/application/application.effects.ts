import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { APPLICATION_LAUNCH, GET_APP, LOAD_APPS_SUCCESS } from './application.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class ApplicationsEffects {
  constructor(
    private http: Http,
    private actions$: Actions
  ) {}

@Effect() appLaunch$ = this.actions$
      .ofType(APPLICATION_LAUNCH)
      .switchMap(() => this.http.get('/apps')
        .map(res => res.json()))
      .map(apps => {
        return {
          type: LOAD_APPS_SUCCESS,
          payload: {
            appList: apps
          }
        }
      });

@Effect() getApp$ = this.actions$
      .ofType(GET_APP)
      .switchMap(() => this.http.get('/app/1')
        .map(res => res.json()))
      .map(apps => {
        return {
          type: LOAD_APPS_SUCCESS,
          payload: {
            appList: apps
          }
        }
      });

}