import { Component, OnInit } from '@angular/core';
import { DrinkInterface } from '../../interfaces/Drink';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  title = 'drinkify';
  drinks = [] as DrinkInterface[];

  constructor() {}

  ngOnInit(): void {}

  drinksEventEmit(newDrinks: Array<DrinkInterface>) {
    this.drinks = newDrinks;
  }
}
