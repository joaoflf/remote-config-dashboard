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

@NgModule({
  declarations: [
    AppComponent,
    FeatureTogglesComponent,
    ConfigPropertiesComponent
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
    EffectsModule.run(AppsEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
