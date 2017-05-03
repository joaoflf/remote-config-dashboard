import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FeatureTogglesService } from "../feature-toggles/feature-toggles.service";

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

  constructor(private fb: FormBuilder, private featureTogglesService: FeatureTogglesService) { }

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
    if (this.featureTogglesService.doesToggleAlreadyExist(formData.toggleName)) {
      this.toggleExistsWarning = true;
    } else {
      this.isAddToggleModalOpen = false;
      this.featureTogglesService.addFeatureToggle({
        name: formData.toggleName,
        state: !!formData.toggleState.state
      })
    }
  }

}
