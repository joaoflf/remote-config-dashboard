import { LOAD_APPS, LOAD_APPS_SUCCESS } from './state-management/apps';
import { App, LOAD_APP, LOAD_APP_SUCCESS } from './state-management/app';
import { Store } from '@ngrx/store';
import { ComponentFixture } from '@angular/core/testing/src/testing';
import { AppModule } from './';
/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: RemoteConfigDashboard', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<App>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
        store = fixture.debugElement.injector.get(Store);
      });
  }));

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should dispatch actions to load the list of apps', async(() => {
    let dispatchCall = spyOn(store, 'dispatch').and.callThrough();
    component.ngOnInit();
    expect(dispatchCall).toHaveBeenCalledWith({
      type: LOAD_APPS,
      payload: {}
    });
  }));

  it('should dispatch actions to load the first app when receiving list of apps', async(() => {
    let dispatchCall = spyOn(store, 'dispatch').and.callThrough();
    store.dispatch({
      type: LOAD_APPS_SUCCESS,
      payload: [{
        id: '1'
      }]
    });
    component.ngOnInit();
    expect(dispatchCall).toHaveBeenCalledWith({
      type: LOAD_APP,
      payload: {
        id: '1'
      }
    });
    store.dispatch({
      type: LOAD_APP_SUCCESS,
      payload: [{
        id: '1',
        name: 'Web App'
      }]
    });
  }));
  it('should dispatch actions to load another app when selected', async(() => {
    let dispatchCall = spyOn(store, 'dispatch').and.callThrough();
    store.dispatch({
      type: LOAD_APPS_SUCCESS,
      payload: [{
        id: '1'
      }]
    });
    component.ngOnInit();
    store.dispatch({
      type: LOAD_APP_SUCCESS,
      payload: [{
        id: '1',
        name: 'Web App'
      }]
    });
    component.loadApp('2');
    expect(dispatchCall).toHaveBeenCalledWith({
      type: LOAD_APP,
      payload: {
        id: '2'
      }
    });
  }));
});
