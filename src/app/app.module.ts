import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { applicationReducer } from './state-management/application';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FeatureTogglesComponent } from './feature-toggles/feature-toggles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigPropertiesComponent } from './config-properties/config-properties.component';


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
    StoreModule.provideStore(applicationReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
