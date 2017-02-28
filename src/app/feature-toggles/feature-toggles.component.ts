import { FeatureToggle } from '../state-management/feature-toggle';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Application, UPDATE_FEATURE_TOGGLE } from '../state-management/application';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-feature-toggles',
  templateUrl: './feature-toggles.component.html',
  styleUrls: ['./feature-toggles.component.scss']
})
export class FeatureTogglesComponent implements OnInit {

  featureToggles$: Observable<Array<FeatureToggle>>;

  featureToggleForm = new FormGroup({
    toggleName: new FormControl('', Validators.required),
    toggleState: new FormGroup({
      state: new FormControl('')
    })
  });

  submitted = false;
  isAddToggleModalOpen = false;
  onSubmit() {
  }
  addNewFeatureToggle() {
    this.featureToggleForm.reset();
    this.submitted = false;
    this.isAddToggleModalOpen = true;
  }

  constructor(private store: Store<Application>) {
    this.featureToggles$ = store.select(state => state.featureToggles);
  }

  ngOnInit() {
  }

  updateFeatureToggle(id: String, state: boolean) {
    this.store.dispatch({
      type: UPDATE_FEATURE_TOGGLE,
      payload:
      {
        id: id,
        state: state
      }
    });
  }
}
