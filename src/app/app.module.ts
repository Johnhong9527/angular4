import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryAppComponent } from './inventory-app/inventory-app.component';
import { StyleComponent } from './style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryAppComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
