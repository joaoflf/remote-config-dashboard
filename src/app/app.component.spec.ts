import { app } from './state-management/app';
import { apps } from './state-management/apps';
import { properties } from './state-management/properties';
import { featureToggles } from './state-management/feature-toggles';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigPropertiesComponent } from './config-properties/config-properties.component';
import { FeatureTogglesComponent } from './feature-toggles/feature-toggles.component';
import { ClarityModule } from 'clarity-angular';
/* tslint:disable:no-unused-variable */
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: RemoteConfigDashboard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ClarityModule.forChild(),
        ReactiveFormsModule,
        FormsModule,
        StoreModule.provideStore({ featureToggles, properties, apps, app })
      ],

      declarations: [
        AppComponent,
        FeatureTogglesComponent,
        ConfigPropertiesComponent,
        FilterPipe
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
