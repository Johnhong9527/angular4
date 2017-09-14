import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators,AbstractControl} from "@angular/forms"

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  name: string;
  nameForm: FormGroup;
  sku: AbstractControl;
  // 注入: FormBuilder
  /*在这期间, Angular将会注入一个从 FormBuilder 类创建的对象实例,并把它赋值给 fb 变量(来
自构造函数)*/
  constructor(fb: FormBuilder) {
    this.nameForm = fb.group({
      'sku': ['',Validators.required]
    })
    this.sku = this.nameForm.controls['sku']
  }

  onSubmit(value: string): void {
    console.log('你的提交值', value);
  }

  ngOnInit() {
  }

}
