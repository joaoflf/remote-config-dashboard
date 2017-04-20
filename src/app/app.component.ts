import { LOAD_APPS } from './state-management/apps';
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
  selectedApp$: Observable<App>;
  apps$: Observable<Array<App>>;

  constructor(private store: Store<App>) {

    this.selectedApp$ = store.select('app');
    this.apps$ = store.select('apps');

    store.dispatch({
        type: 'LOAD_APPS',
        payload: {}
      });
  }
}
