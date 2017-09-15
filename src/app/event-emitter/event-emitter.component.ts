import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from "@angular/forms"

// 自定义验证器
/*当输入值(控件的值 control.value )不是以 123 作为开始时,验证器会返回错误代码
invalidSku 。*/
function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}
@Component({
  selector: 'app-event-emitter',
  templateUrl: './event-emitter.component.html',
  styleUrls: ['./event-emitter.component.css']
})
export class EventEmitterComponent implements OnInit {
  name: string;
  nameForm: FormGroup;
  sku: AbstractControl;
  // 注入: FormBuilder
  /*在这期间, Angular将会注入一个从 FormBuilder 类创建的对象实例,并把它赋值给 fb 变量(来
  自构造函数)*/
  constructor(fb: FormBuilder) {
    this.nameForm = fb.group({
      'sku': ['', Validators.compose([
      Validators.required,skuValidator])
      ]
    })
    this.sku = this.nameForm.controls['sku']

    // 监听变化
    /*
    (1) 通过调用 control.valueChanges 访问到这个 EventEmitter ;
    (2) 然后使用 .subscribe 方法添加一个监听器。
    */
    this.sku.valueChanges.subscribe(
    (value: string) => {
      console.log('sku changed to:', value);
    }
    );
    this.nameForm.valueChanges.subscribe(
    (form: any) => {
      console.log('form changed to:', form);
    }
    );
  }

  onSubmit(value: string): void {
    console.log('你的提交值', value);
  }

  ngOnInit() {
  }
}
