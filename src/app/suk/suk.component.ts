/* tslint:disable: member-ordering forin */
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenNameValidator} from './directive';

@Component({
  selector: 'suk-from',
  templateUrl: './suk.component.html'
})
export class SukComponent implements OnInit {
  // 定义数据
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];
  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  // 使用 FormGroup 注册 heroForm 表单
  heroForm: FormGroup;

  // 监听name输入格式是否符合要求
  ngOnInit(): void {
    this.heroForm = new FormGroup({
      // 以下是验证方式
      /*表单控件( FormControl )封装了表单中的输入,并提供了一些可供操纵的对象。*/
      'name': new FormControl(this.hero.name, [
        /*验证器(validator)让我们能以自己喜欢的任何方式验证表单输入。*/
        Validators.required, // 不为空
        Validators.minLength(4), // 长度不能低于4
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator. 自定义指令验证器,判断用户输入的姓名中没有 bob
      ]),
      // 绑定数据 到this中
      'alterEgo': new FormControl(this.hero.alterEgo),
      // 验证 power是否无效
      'power': new FormControl(this.hero.power, Validators.required)
    });
  }

  // 通过 get
  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/