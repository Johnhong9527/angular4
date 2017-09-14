import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroFromComponent} from './hero-from/hero-from.component';
import {SukComponent} from './suk/suk.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFromComponent,
    SukComponent,
    FormcontrolComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
