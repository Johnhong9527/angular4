import { BrowserModule } from '@angular/platform-browser';
// import {MdToolbarModule, MdIconModule} from '@angular/material';
import {CustomMaterialModule} from './custom.material.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
