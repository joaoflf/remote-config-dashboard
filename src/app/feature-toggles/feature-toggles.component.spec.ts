import { FeatureTogglesService } from './feature-toggles.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AddToggleModalComponent } from '../add-toggle-modal/add-toggle-modal.component';
import { app } from '../state-management/app';
import { apps } from '../state-management/apps';
import { properties } from '../state-management/properties';
import { featureToggles } from '../state-management/feature-toggles';
import { StoreModule } from '@ngrx/store';
import { ClarityModule } from 'clarity-angular';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/pipes/filter.pipe';
import { FeatureTogglesComponent } from './feature-toggles.component';

describe('FeatureTogglesComponent', () => {
  let component: FeatureTogglesComponent;
  let fixture: ComponentFixture<FeatureTogglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClarityModule.forChild(),
        ReactiveFormsModule,
        FormsModule,
        StoreModule.provideStore({ featureToggles, properties, apps, app })],
      declarations: [FeatureTogglesComponent, FilterPipe, AddToggleModalComponent],
      providers: [
        FeatureTogglesService
      ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(FeatureTogglesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
