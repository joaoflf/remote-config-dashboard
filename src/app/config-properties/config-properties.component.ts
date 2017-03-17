import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Application, UPDATE_PROPERTIES } from '../state-management/application';
import { JsonEditorComponent, JsonEditorOptions } from 'ng2-jsoneditor';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-config-properties',
  templateUrl: './config-properties.component.html',
  styleUrls: ['./config-properties.component.scss']
})
export class ConfigPropertiesComponent implements OnInit {

  configProperties$: Observable<Object>;
  public editorOptions: JsonEditorOptions;
  @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;

  constructor(private store: Store<Application>) {
    this.configProperties$ = store.select(state => state.properties);
    this.editorOptions = new JsonEditorOptions();
    this.editorOptions.modes = ['tree', 'code'];
    // need to bind component to function as the library weirdly binds editorOptions
    this.editorOptions.onChange = this.onJsonEditorChange.bind(this);
  }

  ngOnInit() {
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
