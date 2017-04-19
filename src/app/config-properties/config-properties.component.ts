import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Application, UPDATE_PROPERTIES } from '../state-management/application';
import { Component, OnInit, OnChanges, Input, SimpleChange} from '@angular/core';

declare var JSONEditor;

@Component({
  selector: 'app-config-properties',
  templateUrl: './config-properties.component.html',
  styleUrls: ['./config-properties.component.scss']
})
export class ConfigPropertiesComponent implements OnInit {

  editor : any;

  constructor(private store: Store<Application>) {
    this.store = store;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
   let editorOptions = {
      modes: ['tree', 'code'],
      onChange: this.onJsonEditorChange.bind(this)
    };
    this.store.select('applicationReducer').subscribe((application:Application) => {
      if (!this.editor) {
        let templateDivRef = document.getElementById('jsoneditor');
        this.editor = new JSONEditor(templateDivRef, editorOptions, application.app.properties); 
      }
    }); 
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
