import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-non-bindable-demo',
  templateUrl: './ng-non-bindable-demo.component.html',
  styleUrls: ['./ng-non-bindable-demo.component.css']
})
export class NgNonBindableDemoComponent implements OnInit {
  content:string;
  constructor() {
    this.content="文章";
  }

  ngOnInit() {
  }

}
