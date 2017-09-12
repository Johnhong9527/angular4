import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-suk',
  templateUrl: './suk.component.html',
  styleUrls: ['./suk.component.css']
})
export class SukComponent implements OnInit {

  constructor() {
    const ctrl = new FormControl('some value');
    console.log(ctrl.value);     // 'some value'
  }

  ngOnInit() {
  }

}
