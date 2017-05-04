import { Store } from '@ngrx/store';
import { ADD_FEATURE_TOGGLE, FeatureToggle, featureToggles } from '../state-management/feature-toggles';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'add-toggle-modal',
  templateUrl: './add-toggle-modal.component.html',
  styleUrls: ['./add-toggle-modal.component.scss']
})
export class AddToggleModalComponent implements OnInit {
  featureToggleForm: any;
  submitted = false;
  isAddToggleModalOpen = false;
  toggleExistsWarning = false;
  featureToggles: FeatureToggle[];

  constructor(private fb: FormBuilder, private store: Store<FeatureToggle[]>) { }

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
    this.toggleExistsWarning = false;
    this.submitted = false;
    this.isAddToggleModalOpen = true;
  }

  addToggleClicked() {
    this.toggleExistsWarning = false;
    let formData = this.featureToggleForm.value;
   
    if (this.doesToggleAlreadyExist(formData.toggleName)) {
      this.toggleExistsWarning = true;
    } else {
      this.isAddToggleModalOpen = false;
      this.addFeatureToggle({
        name: formData.toggleName,
        state: !!formData.toggleState.state
      })
    }
  }
  doesToggleAlreadyExist(name) {
    return this.featureToggles.filter((toggle) => toggle.name === name).length;
  }


  addFeatureToggle(toggle: FeatureToggle) {
    this.store.dispatch({
        type: ADD_FEATURE_TOGGLE,
        payload: {...toggle}
      });
  }

}
