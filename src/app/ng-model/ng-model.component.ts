import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms"

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.css']
})
export class NgModelComponent implements OnInit {
  myForm: FormGroup;
  productName: string;
  // 注入: FormBuilder
  /*在这期间, Angular将会注入一个从 FormBuilder 类创建的对象实例,并把它赋值给 fb 变量(来
  自构造函数)*/
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'productName': ['', Validators.required]
    })
  }

  onSubmit(value: string): void {
    console.log('你的提交值', value);
  }

  ngOnInit() {
  }
}
