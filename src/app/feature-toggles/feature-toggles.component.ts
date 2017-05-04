import { AddToggleModalComponent } from '../add-toggle-modal/add-toggle-modal.component';
import { FeatureToggle } from '../state-management/feature-toggles';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ADD_FEATURE_TOGGLE, UPDATE_FEATURE_TOGGLE, REMOVE_FEATURE_TOGGLE } from '../state-management/feature-toggles';

@Component({
  selector: 'app-feature-toggles',
  templateUrl: './feature-toggles.component.html',
  styleUrls: ['./feature-toggles.component.scss']
})
export class FeatureTogglesComponent implements OnInit {

  @ViewChild(AddToggleModalComponent) addToggleModal: AddToggleModalComponent

  featureToggles$: Observable<Array<FeatureToggle>>;
  isConfirmationModalOpen = false;
  selectedToggleName: String;
  confirmationMessage: String;

  constructor(private store: Store<FeatureToggle[]>) {
    this.featureToggles$ = this.store.select('featureToggles');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    //pass array of toggles to add modal, to check if a toggle already exists before adding
    this.featureToggles$.subscribe((toggles) => {
      this.addToggleModal.featureToggles = toggles;
    });
  }

  openRemovalConfirmationModal(name: String) {
    this.selectedToggleName = name;
    this.confirmationMessage = `Are you sure you want to remove the toggle ${name}?`;
    this.isConfirmationModalOpen = true;
  }

  confirmToggleRemoval() {
    this.isConfirmationModalOpen = false;
    this.removeFeatureToggle(this.selectedToggleName)
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


