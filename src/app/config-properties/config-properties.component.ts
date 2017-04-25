import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { UPDATE_PROPERTIES } from '../state-management/properties';
import { Component, OnInit, OnChanges, Input, SimpleChange} from '@angular/core';

declare var JSONEditor;

@Component({
  selector: 'app-config-properties',
  templateUrl: './config-properties.component.html',
  styleUrls: ['./config-properties.component.scss']
})
export class ConfigPropertiesComponent implements OnInit {

  editor : any;

  constructor(private store: Store<Object>) {
    this.store = store;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
   let editorOptions = {
      modes: ['tree', 'code'],
      onChange: this.onJsonEditorChange.bind(this)
    };
    this.store.select('properties').subscribe((properties) => {
      if (!this.editor) {
        let templateDivRef = document.getElementById('jsoneditor');
        this.editor = new JSONEditor(templateDivRef, editorOptions, properties); 
      }
      else {
        this.editor.set(properties);
      }
    }); 
  }

  onJsonEditorChange() {

      this.store.dispatch({
        type: UPDATE_PROPERTIES,
        payload: this.editor.get()
      });

  }
}
