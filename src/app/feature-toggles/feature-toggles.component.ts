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
  featureToggles: Array<FeatureToggle>;
  submitted = false;
  isAddToggleModalOpen = false;
  isConfirmationModalOpen = false;
  toggleExistsWarning = false;
  featureToggleForm: any;
  confirmationMessage: String;
  selectedToggleName: String;

  constructor(private store: Store<Application>, private fb: FormBuilder) {
    this.featureToggles$ = store.select(state => state.featureToggles);
    // for sync operations
    this.featureToggles$.subscribe((toggles) => { this.featureToggles = toggles; });
  }

  ngOnInit() {
    this.featureToggleForm = this.fb.group({
      toggleName: new FormControl('', Validators.required),
      toggleState: new FormGroup({
        state: new FormControl('')
      })
    });
  }

  openAddToggleModal() {
    this.featureToggleForm.reset();
    this.submitted = false;
    this.isAddToggleModalOpen = true;
  }

  doesToggleAlreadyExist(name) {
    return this.featureToggles.filter((toggle) => toggle.name === name).length;
  }

  addToggleClicked() {
    this.toggleExistsWarning = false;
    let formData = this.featureToggleForm.value;
    if (this.doesToggleAlreadyExist(formData.toggleName)) {
      this.toggleExistsWarning = true;
    } else {
      this.isAddToggleModalOpen = false;
      this.store.dispatch({
        type: ADD_FEATURE_TOGGLE,
        payload:
        {
          featureToggle: {
            name: formData.toggleName,
            state: !!formData.toggleState.state
          }
        }
      });
    }
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
    this.isConfirmationModalOpen = true;
    this.openConfirmationModal(`Are you sure you want to remove the toggle ${name}?`);
    this.selectedToggleName = name;
  }

  openConfirmationModal(message: String) {
    this.isConfirmationModalOpen = true;
    this.confirmationMessage = message;
  }

  confirmToggleRemoval() {
    this.isConfirmationModalOpen = false;
    this.store.dispatch({
      type: REMOVE_FEATURE_TOGGLE,
      payload:
      {
        name: this.selectedToggleName
      }
    });
  }
}
