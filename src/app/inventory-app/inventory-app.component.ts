import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-app',
  templateUrl: './inventory-app.component.html',
  styleUrls: ['./inventory-app.component.css']
})
export class InventoryAppComponent implements OnInit {
  color:string;
  fontSize:number;
  constructor() {
  }
  apply(color: string, fontSize: number) {
    this.color = color;
    this.fontSize = fontSize;
  }

  ngOnInit() {
  }

}
