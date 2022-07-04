import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  powers = ['Smart', 'Super power', 'Flexible'];
  hero: Hero = {
    name: '',
    alterEgo: '',
    power: '',
  };

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.hero);
  }

  
}
