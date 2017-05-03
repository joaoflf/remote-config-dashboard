import { AppEffects } from './state-management/app';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { app } from './state-management/app';
import { apps } from './state-management/apps';
import { properties } from './state-management/properties';
import { featureToggles } from './state-management/feature-toggles';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FeatureTogglesComponent } from './feature-toggles/feature-toggles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigPropertiesComponent } from './config-properties/config-properties.component';
import { EffectsModule } from '@ngrx/effects';
import { AppsEffects } from './state-management/apps';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { AddToggleModalComponent } from './add-toggle-modal/add-toggle-modal.component';
import { FeatureTogglesService } from "./feature-toggles/feature-toggles.service";

@NgModule({
  declarations: [
    AppComponent,
    FeatureTogglesComponent,
    ConfigPropertiesComponent,
    FilterPipe,
    AddToggleModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forChild(),
    StoreModule.provideStore({featureToggles, properties, apps, app}),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    EffectsModule.run(AppsEffects),
    EffectsModule.run(AppEffects)
  ],
  providers: [FilterPipe, FeatureTogglesService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AppModule { }
