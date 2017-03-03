import { FeatureToggle } from '../state-management/feature-toggle';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { ADD_FEATURE_TOGGLE, Application, UPDATE_FEATURE_TOGGLE, REMOVE_FEATURE_TOGGLE } from '../state-management/application';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-feature-toggles',
  templateUrl: './feature-toggles.component.html',
  styleUrls: ['./feature-toggles.component.scss']
})
export class FeatureTogglesComponent implements OnInit {

  featureToggles$: Observable<Array<FeatureToggle>>;
  submitted = false;
  isAddToggleModalOpen = false;
  featureToggleForm: any;

  constructor(private store: Store<Application>, private fb: FormBuilder) {
    this.featureToggles$ = store.select(state => state.featureToggles);
  }

  openAddToggleModal() {
    this.featureToggleForm.reset();
    this.submitted = false;
    this.isAddToggleModalOpen = true;
  }

  ngOnInit() {
    this.featureToggleForm = this.fb.group({
      toggleName: new FormControl('', Validators.required),
      toggleState: new FormGroup({
        state: new FormControl('')
      })
    });
  }

  onAddToggleSubmit() {
    this.isAddToggleModalOpen = false;
    let formData = this.featureToggleForm.value;

     this.store.dispatch({
      type: ADD_FEATURE_TOGGLE,
      payload:
      {
        featureToggle: {
          name: formData.toggleName,
          state: formData.toggleState.state
        }
      }
    });
  }

  updateFeatureToggle(name: String, state: boolean) {
    this.store.dispatch({
      type: UPDATE_FEATURE_TOGGLE,
      payload:
      {
        name: name,
        state: state
      }
    });
  }

  removeFeatureToggle(name: String) {
    this.store.dispatch({
      type: REMOVE_FEATURE_TOGGLE,
      payload:
      {
        name: name
      }
    });
  }
}
