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
  showToggleExistsWarning = false;
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
    this.showToggleExistsWarning = false;
    this.submitted = false;
    this.isAddToggleModalOpen = true;
  }

  addToggleClicked() {
    this.showToggleExistsWarning = false;
    let formData = this.featureToggleForm.value;
   
    if (this.doesToggleAlreadyExist(formData.toggleName)) {
      this.showToggleExistsWarning = true;
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
