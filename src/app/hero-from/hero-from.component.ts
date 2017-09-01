import {Component, OnInit} from '@angular/core';
import {Hero} from './Hero'

@Component({
  selector: 'app-hero-from',
  templateUrl: './hero-from.component.html',
  styleUrls: ['./hero-from.component.css']
})
export class HeroFromComponent implements OnInit {

  constructor() {
    let myHero =  new Hero(42, 'SkyDog',
      'Fetch any object at any distance',
      'Leslie Rollover');
    console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
  }

  ngOnInit() {
  }

}
