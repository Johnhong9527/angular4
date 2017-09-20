import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from "@angular/http";


import {AppComponent} from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { MyHttpComponent } from './my-http/my-http.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    MyHttpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
