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
  selectedApp$: Observable<App>;
  appList$: Observable<Array<App>>;

  constructor(private store: Store<Application>) {
    this.selectedApp$ = store.select(state => state.selectedApp);
    this.appList$ = store.select(state => state.appList);
  }
}
