import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validator} from "@angular/forms"

@Component({
  selector: 'form-control',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {
  name: string;
  nameForm: FormGroup;

  constructor() {
  }
  onSubmit(form: any):void {
    console.log('你的提交值', form);
  }

  ngOnInit(): void {
    this.nameForm = new FormGroup({
      'name': new FormControl(this.name)
    })
  }
}
