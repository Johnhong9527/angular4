import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-app',
  templateUrl: './inventory-app.component.html',
  styleUrls: ['./inventory-app.component.css']
})
export class InventoryAppComponent implements OnInit {
  isBordered: boolean;
  classesObj: Object;
  classList: string[];
  constructor() {
    this.isBordered = true;
    // this.classesObj = {
    //   bordered : "bordered"
    // };
    this.classesObj = {
      bordered : "bordered"
    };
    this.classList = ['blue', 'round'];
    setTimeout(() => {
      console.log(this)
      console.log(this.classesObj)
    },1000)
    
  }
  ngOnInit() {
  }

}
