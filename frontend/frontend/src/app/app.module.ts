import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculatedOutputComponent } from './calculated-output/calculated-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatedOutputComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
