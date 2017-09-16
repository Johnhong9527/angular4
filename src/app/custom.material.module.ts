import {MdToolbarModule, MdIconModule,MdSelectModule,MdDialogModule,MdInputModule,MdButtonModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MdToolbarModule, MdIconModule,MdSelectModule,MdDialogModule,MdInputModule,MdButtonModule],
  exports: [MdToolbarModule, MdIconModule,MdSelectModule,MdDialogModule,MdInputModule,MdButtonModule],
})
export class CustomMaterialModule { }
