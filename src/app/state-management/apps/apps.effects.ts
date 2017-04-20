import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { LOAD_APPS, LOAD_APPS_SUCCESS } from './apps.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class AppsEffects {
  constructor(
    private http: Http,
    private actions$: Actions
  ) {}

@Effect() appLaunch$ = this.actions$
      .ofType(LOAD_APPS)
      .switchMap(() => this.http.get('/apps')
        .map(res => res.json()))
      .map(apps => {
        return {
          type: LOAD_APPS_SUCCESS,
          payload: apps
        }
      });
}