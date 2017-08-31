import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryAppComponent } from './inventory-app/inventory-app.component';
import { StyleComponent } from './style/style.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgNonBindableDemoComponent } from './ng-non-bindable-demo/ng-non-bindable-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryAppComponent,
    StyleComponent,
    NgForComponent,
    NgNonBindableDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
