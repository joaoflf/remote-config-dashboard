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
  configProperties$: Observable<Object>;
  public editorOptions: JsonEditorOptions;
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  constructor(private store: Store<Application>) {
    this.appName$ = store.select(state => state.name);
    this.configProperties$ = store.select(state => state.properties);
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['tree', 'code'];
    //need to bind component to function as the library weirdly binds editorOptions
    this.editorOptions.onChange = this.onJsonEditorChange.bind(this);
    console.log(this.editorOptions);
  }

  onJsonEditorChange() {
    try {
      this.store.dispatch({
        type: UPDATE_PROPERTIES,
        payload:
        {
          properties: this.editor.get()
        }
      });
    } catch (e) {
    }
  }
}
