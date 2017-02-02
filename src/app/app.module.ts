import { applicationReducer } from './state-management/application';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forChild(),
    StoreModule.provideStore(applicationReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
