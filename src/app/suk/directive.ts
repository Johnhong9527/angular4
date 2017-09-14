// 引入依赖项
import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators} from '@angular/forms';

/** 英雄的名字不能与给定的正则表达式匹配 */

/*
这个函数实际上是一个工厂，它接受一个用来检测指定名字是否已被禁用的正则表达式，并返回一个验证器函数。

在本例中，禁止的名字是“bob”； 验证器会拒绝任何带有“bob”的英雄名字。 在其他地方，只要配置的正则表达式可以匹配上，它可能拒绝“alice”或者任何其他名字。

forbiddenNameValidator工厂函数返回配置好的验证器函数。 该函数接受一个Angular控制器对象，并在控制器值有效时返回null，或无效时返回验证错误对象。 验证错误对象通常有一个名为验证秘钥（forbiddenName）的属性。其值为一个任意词典，我们可以用来插入错误信息（{name}）。
*/
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

@Directive({
  // selector 定义在表单中使用的数据
  selector: '[forbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {
  @Input() forbiddenName: string;

  validate(control: AbstractControl): { [key: string]: any } {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
      : null;
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/