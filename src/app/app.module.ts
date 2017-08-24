import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryAppComponent } from './inventory-app/inventory-app.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
