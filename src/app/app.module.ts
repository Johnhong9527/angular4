import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroFromComponent} from './hero-from/hero-from.component';
import {SukComponent} from './suk/suk.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFromComponent,
    SukComponent,
    FormcontrolComponent,
    FormBuilderComponent
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
