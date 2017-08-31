import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  cities: string[];
  people: Object[];
  constructor() {
    this.cities = ['Miami', 'Sao Paulo', 'New York'];
    this.people = [
    { name: 'Anderson', age: 35, city: 'Sao Paulo' },
    { name: 'John', age: 12, city: 'Miami' },
    { name: 'Peter', age: 22, city: 'New York' }
    ];
  }

  ngOnInit() {
  }

}
