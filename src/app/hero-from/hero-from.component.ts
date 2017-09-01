import {Component, OnInit} from '@angular/core';
import {Hero} from './Hero'

@Component({
  selector: 'hero-from',
  templateUrl: './hero-from.component.html',
  styleUrls: ['./hero-from.component.css']
})
export class HeroFromComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }
}
