import { BrowserModule } from '@angular/platform-browser';
// import {MdToolbarModule, MdIconModule} from '@angular/material';
import {CustomMaterialModule} from './custom.material.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent} from './app.component';
import {MDComponent, DialogOverviewExampleDialog} from './MD/MD'
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    MDComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,DialogOverviewExampleDialog]
})
export class AppModule { }
