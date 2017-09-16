import {MdToolbarModule, MdIconModule,MdSelectModule,MdDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MdToolbarModule, MdIconModule,MdSelectModule,MdDialogModule],
  exports: [MdToolbarModule, MdIconModule,MdSelectModule,MdDialogModule],
})
export class CustomMaterialModule { }
