import { app } from '../state-management/app';
import { apps } from '../state-management/apps';
import { properties } from '../state-management/properties';
import { featureToggles } from '../state-management/feature-toggles';
import { StoreModule } from '@ngrx/store';
import { ClarityModule } from 'clarity-angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPropertiesComponent } from './config-properties.component';

describe('ConfigPropertiesComponent', () => {
  let component: ConfigPropertiesComponent;
  let fixture: ComponentFixture<ConfigPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
       imports: [
        ClarityModule.forChild(),
        StoreModule.provideStore({ featureToggles, properties, apps, app })],
      declarations: [ ConfigPropertiesComponent ]
    })
    .compileComponents()
    .then(() => {

    fixture = TestBed.createComponent(ConfigPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
