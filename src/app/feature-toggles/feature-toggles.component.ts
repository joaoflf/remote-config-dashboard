import { AddToggleModalComponent } from '../add-toggle-modal/add-toggle-modal.component';
import { FeatureToggle } from '../state-management/feature-toggles';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ADD_FEATURE_TOGGLE, UPDATE_FEATURE_TOGGLE, REMOVE_FEATURE_TOGGLE } from '../state-management/feature-toggles';
import { FeatureTogglesService } from "./feature-toggles.service";


@Component({
  selector: 'app-feature-toggles',
  templateUrl: './feature-toggles.component.html',
  styleUrls: ['./feature-toggles.component.scss']
})
export class FeatureTogglesComponent implements OnInit {

  @ViewChild(AddToggleModalComponent)
  private addToggleModal: AddToggleModalComponent;

  featureToggles$: Observable<Array<FeatureToggle>>;
  isConfirmationModalOpen = false;
  selectedToggleName: String;
  confirmationMessage: String;

  constructor(private store: Store<FeatureToggle[]>, private featureTogglesService: FeatureTogglesService) {
    this.featureToggles$ = featureTogglesService.getFeatureToggles();
    // for sync operations

  }

  ngOnInit() {
  }

  openRemovalConfirmationModal(name: String) {
    this.selectedToggleName = name;
    this.confirmationMessage = `Are you sure you want to remove the toggle ${name}?`;
    this.isConfirmationModalOpen = true;
  }

  confirmToggleRemoval() {
    this.isConfirmationModalOpen = false;
    this.featureTogglesService.removeFeatureToggle(this.selectedToggleName)
  }
}


