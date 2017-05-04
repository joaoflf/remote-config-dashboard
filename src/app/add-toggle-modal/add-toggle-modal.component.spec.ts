import { ADD_FEATURE_TOGGLE } from '../state-management/feature-toggles';
import { Store } from '@ngrx/store';
import { AppModule } from '../';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddToggleModalComponent } from './add-toggle-modal.component';

describe('AddToggleModalComponent', () => {
  let component: AddToggleModalComponent;
  let fixture: ComponentFixture<AddToggleModalComponent>;
  let store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AddToggleModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        store = fixture.debugElement.injector.get(Store);
      });
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should open the modal on a blank state', () => {
    let resetForm = spyOn(component.featureToggleForm, 'reset').and.callThrough();
    component.openAddToggleModal();
    fixture.detectChanges();
    expect(component.showToggleExistsWarning).toBeFalsy();
    expect(component.submitted).toBeFalsy();
    expect(component.isAddToggleModalOpen).toBeTruthy();
    expect(resetForm).toHaveBeenCalled();
    let element = fixture.nativeElement;
    expect(element.querySelector('.modal-dialog')).toBeTruthy();
  });

  it('should add a toggle', () => {
    let dispatchAction = spyOn(store, 'dispatch').and.callThrough();
    component.featureToggles = [];
    component.openAddToggleModal();
    fixture.detectChanges();
    component.featureToggleForm.controls['toggleName'].setValue('testToggle');
    component.addToggleClicked();
    fixture.detectChanges();

    expect(dispatchAction).toHaveBeenCalledWith({
      type: ADD_FEATURE_TOGGLE,
      payload: {
        name: 'testToggle',
        state: false
      }
    });
    expect(component.isAddToggleModalOpen).toBeFalsy();
  });

  it('should not add a toggle if it already exists', () => {
    component.featureToggles = [{
        name: 'testToggle',
        state: false
      }];
    component.openAddToggleModal();
    fixture.detectChanges();
    component.featureToggleForm.controls['toggleName'].setValue('testToggle');
    component.addToggleClicked();
    fixture.detectChanges();

    expect(component.isAddToggleModalOpen).toBeTruthy();
    expect(component.showToggleExistsWarning).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.toggle-exists-alert')).toBeTruthy();
  });
});
