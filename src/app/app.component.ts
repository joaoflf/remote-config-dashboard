import { LOAD_APPS } from './state-management/apps';
import { LOAD_APP } from './state-management/app';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { App } from './state-management/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedApp$: Observable<App>;
  selectedAppId: String;
  apps$: Observable<Array<App>>;

  constructor(private store: Store<App>) {
  }
  
  ngOnInit(): void {
    this.selectedApp$ = this.store.select('app');
    this.apps$ = this.store.select('apps');
    this.store.select('app').subscribe((app: App) => {
      this.selectedAppId = app.id;
    });
    //select and fetch the first app on the list
    this.store.select('apps').subscribe((apps: Array<App>) => {
      if (apps.length) {
        this.store.dispatch({
          type: LOAD_APP,
          payload: {
            id: apps[0].id
          }
        });
      }
    });
    //Load list of apps from API
    this.store.dispatch({
      type: LOAD_APPS,
      payload: {}
    });
  }

  loadApp(id: String) {
    if (id !== this.selectedAppId) {
      this.store.dispatch({
        type: LOAD_APP,
        payload: {
          id: id
        }
      });
    }
  }
}
