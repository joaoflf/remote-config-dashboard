import { LOAD_TOGGLES_SUCCESS } from '../state-management/feature-toggles';
import { Store } from '@ngrx/store';
import { AppModule } from '../';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FeatureTogglesComponent } from './feature-toggles.component';

describe('FeatureTogglesComponent', () => {
  let component: FeatureTogglesComponent;
  let fixture: ComponentFixture<FeatureTogglesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(FeatureTogglesComponent);
        let store = fixture.debugElement.injector.get(Store);
        store.dispatch({
          type: LOAD_TOGGLES_SUCCESS,
          payload: [
            {
              name: 'testToggle',
              state: false
            }
          ]
        });
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create the component and view elements', () => {
    expect(component).toBeTruthy();
fixture.detectChanges();
    const element = fixture.nativeElement;
    expect(element.querySelector('.toggles-table')).toBeTruthy();
    expect(element.querySelector('.toggle-search-input')).toBeTruthy();
    expect(element.querySelector('.new-toggle-button')).toBeTruthy();
  });

  it('should get featureToggles from store and render them in the table', () => {
    component.featureToggles$.subscribe((toggles) => {
      expect(toggles[0].name).toBe('testToggle');
    });

    const element = fixture.nativeElement;
    expect(element.querySelector('.toggle-name-cell').innerHTML).toBe('testToggle');
  });

  it('should remove a toggle with confirmation modal', () => {
    component.openRemovalConfirmationModal('testToggle');
    expect(component.confirmationMessage).toBe('Are you sure you want to remove the toggle testToggle?');
    expect(component.isConfirmationModalOpen).toBeTruthy();

    component.confirmToggleRemoval();
    component.featureToggles$.subscribe((toggles) => {
      expect(toggles.length).toBe(0);
    });
  });

  it('should update a toggle', () => {
    component.updateFeatureToggle('testToggle', true);
    component.featureToggles$.subscribe((toggles) => {
      expect(toggles[0].state).toBeTruthy();
    });
  });
});
