import { APPLICATION_LAUNCH } from './state-management/application';
import { Application } from './state-management/application';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { App } from './state-management/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  state$: Observable<Application>;

  constructor(private store: Store<Application>) {

    this.state$ = store.select('applicationReducer');

    store.dispatch({
        type: 'APPLICATION_LAUNCH',
        payload: {}
      });
  }
}
