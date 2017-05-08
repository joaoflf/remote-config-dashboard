import { LOAD_PROPERTIES_SUCCESS, UPDATE_PROPERTIES } from '../state-management/properties';
import { Store } from '@ngrx/store';
import { AppModule } from '../';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigPropertiesComponent } from './config-properties.component';

describe('ConfigPropertiesComponent', () => {
  let component: ConfigPropertiesComponent;
  let fixture: ComponentFixture<ConfigPropertiesComponent>;
  let store: Store<Object>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ConfigPropertiesComponent);
        component = fixture.componentInstance;
        store = fixture.debugElement.injector.get(Store);
      });
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the json editor component with the loaded properties', () => {
    component.ngAfterViewInit();
    store.dispatch({
      type: LOAD_PROPERTIES_SUCCESS,
      payload: {
        testProperty: 'test'
      }
    });
    expect(component.editor).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.jsoneditor-field').innerHTML).toBe('testProperty');
    expect(fixture.nativeElement.querySelector('.jsoneditor-string').innerHTML).toBe('test');
  });

  it('should dispatch an action to store when editor changes', () => { 
    let dispatchAction = spyOn(store, 'dispatch').and.callThrough();
    component.ngAfterViewInit();
    store.dispatch({
      type: LOAD_PROPERTIES_SUCCESS,
      payload: {
        testProperty: 'test'
      }
    });
    component.onJsonEditorChange();
    expect(dispatchAction).toHaveBeenCalledWith({
      type: UPDATE_PROPERTIES,
      payload: {
        testProperty: 'test'
      }
    });
  });

  it('should update the json editor component with the changed properties', () => { 
    let updateEditor = spyOn(component.editor, 'set').and.callThrough();
    component.ngAfterViewInit();
    store.dispatch({
      type: LOAD_PROPERTIES_SUCCESS,
      payload: {
        testProperty: 'test'
      }
    });
    store.dispatch({
      type: UPDATE_PROPERTIES,
      payload: {
        testProperty: 'test2'
      }
    });
    expect(updateEditor).toHaveBeenCalledWith({
      testProperty: 'test2'
    });
  });
});
