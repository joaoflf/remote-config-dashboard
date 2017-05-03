import { app } from '../state-management/app';
import { apps } from '../state-management/apps';
import { properties } from '../state-management/properties';
import { featureToggles } from '../state-management/feature-toggles';
import { FeatureTogglesService } from '../feature-toggles/feature-toggles.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClarityModule } from 'clarity-angular';
import { FormsModule } from '@angular/forms';
import { AddToggleModalComponent } from './add-toggle-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

describe('AddToggleModalComponent', () => {
  let component: AddToggleModalComponent;
  let fixture: ComponentFixture<AddToggleModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ClarityModule.forChild(),
        FormsModule,
        ReactiveFormsModule,
        StoreModule.provideStore({ featureToggles, properties, apps, app })
      ],
      declarations: [AddToggleModalComponent],
      providers: [FeatureTogglesService]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AddToggleModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
