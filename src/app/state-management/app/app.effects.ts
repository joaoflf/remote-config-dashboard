import { LOAD_TOGGLES_SUCCESS } from '../feature-toggles/feature-toggles.actions';
import { LOAD_PROPERTIES_SUCCESS } from '../properties';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { LOAD_APP, LOAD_APP_SUCCESS } from './app.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/from';

@Injectable()
export class AppEffects {
  constructor(
    private http: Http,
    private actions$: Actions
  ) { }

  @Effect() loadApp$ = this.actions$
    .ofType(LOAD_APP)
    .switchMap(action => this.http.get
      ('https://demo6219157.mockable.io/apps/' + action.payload.id)
      .map(res => res.json()))
    .mergeMap((app) => {

      return Observable.from([
        {
          type: LOAD_APP_SUCCESS,
          payload: { id: app.id, name: app.name }
        },
        {
          type: LOAD_PROPERTIES_SUCCESS,
          payload: app.properties
        },
        {
          type: LOAD_TOGGLES_SUCCESS,
          payload: app.featureToggles
        }
      ])
    }
    );
}