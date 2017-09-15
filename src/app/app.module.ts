import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroFromComponent} from './hero-from/hero-from.component';
import {SukComponent} from './suk/suk.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { EventEmitterComponent } from './event-emitter/event-emitter.component';
import { NgModelComponent } from './ng-model/ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroFromComponent,
    SukComponent,
    FormcontrolComponent,
    FormBuilderComponent,
    EventEmitterComponent,
    NgModelComponent
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
