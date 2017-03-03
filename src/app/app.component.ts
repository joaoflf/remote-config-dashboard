import { Application, UPDATE_PROPERTIES } from './state-management/application';
import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { JsonEditorComponent, JsonEditorOptions } from 'ng2-jsoneditor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appName$: Observable<String>;

  constructor(private store: Store<Application>) {
    this.appName$ = store.select(state => state.name);
  }

}
