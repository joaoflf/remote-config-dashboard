import { ADD_FEATURE_TOGGLE, REMOVE_FEATURE_TOGGLE, UPDATE_FEATURE_TOGGLE, UPDATE_APP_NAME } from './state-management/application';
import { Application } from './state-management/application';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FeatureToggle } from './state-management/feature-toggle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private store: Store<Application>) {
    console.log(store);
    store.dispatch({
      type: ADD_FEATURE_TOGGLE,
      payload:
      {
        featureToggle: <FeatureToggle>{
          id: '1',
          name: 'testToggle',
          state: true
        }
      }
    });

    store.dispatch({
      type: ADD_FEATURE_TOGGLE,
      payload:
      {
        featureToggle: <FeatureToggle>{
          id: '2',
          name: 'testToggle2',
          state: false
        }
      }
    });

    store.dispatch({
      type: REMOVE_FEATURE_TOGGLE,
      payload:
      {
        id: '1'
      }
    });

    store.dispatch({
      type: UPDATE_FEATURE_TOGGLE,
      payload:
      {
        id: '2',
        state: true
      }
    });

    store.dispatch({
      type: UPDATE_APP_NAME,
      payload:
      {
        name: 'testApp'
      }
    });
  }
}
