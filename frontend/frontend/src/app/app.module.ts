import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CalculatedCostsComponent } from './calculated-costs/calculated-costs.component';
import { TripCardComponent } from './calculated-costs/trip-card/trip-card.component'
@NgModule({
  declarations: [
    AppComponent,
    CalculatedCostsComponent,
    TripCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
