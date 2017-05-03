import { Observable } from 'rxjs/Rx';
import {
    ADD_FEATURE_TOGGLE,
    FeatureToggle,
    REMOVE_FEATURE_TOGGLE,
    UPDATE_FEATURE_TOGGLE
} from '../state-management/feature-toggles';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class FeatureTogglesService {

  featureToggles$: Observable<Array<FeatureToggle>>;
  featureToggles: Array<FeatureToggle>;

  constructor(private store: Store<FeatureToggle[]>) {
     this.featureToggles$ = this.store.select('featureToggles')
     this.featureToggles$.subscribe((toggles) => { this.featureToggles = toggles; });
  }

  getFeatureToggles(): Observable<Array<FeatureToggle>> {
    return this.featureToggles$;
  }

  doesToggleAlreadyExist(name) {
    return this.featureToggles.filter((toggle) => toggle.name === name).length;
  }

  addFeatureToggle(toggle: FeatureToggle) {

    this.store.dispatch({
        type: ADD_FEATURE_TOGGLE,
        payload: {...toggle}
      });
  }

   updateFeatureToggle(name: String, state: boolean) {
    this.store.dispatch({
      type: UPDATE_FEATURE_TOGGLE,
      payload:
      {
        name: name,
        state: state
      }
    });
  }

  removeFeatureToggle(name: String) {
    this.store.dispatch({
      type: REMOVE_FEATURE_TOGGLE,
      payload:
      {
        name: name
      }
    });
  }

}
