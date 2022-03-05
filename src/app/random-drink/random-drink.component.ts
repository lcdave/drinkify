import { Component, OnInit } from '@angular/core';
import { DrinkInterface } from './../../interfaces/Drink';

@Component({
  selector: 'app-random-drink',
  templateUrl: './random-drink.component.html',
  styleUrls: ['./random-drink.component.scss'],
})
export class RandomDrinkComponent implements OnInit {
  apiURL: string;
  drink: DrinkInterface;

  constructor() {
    this.apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
    this.drink = {} as DrinkInterface;
  }

  ngOnInit(): void {
    this.getRandomDrink().then((drinks) => {
      this.drink = drinks[0];
    });
  }

  async getRandomDrink(): Promise<any[]> {
    const response = await fetch(this.apiURL);
    const data = await response.json();

    return data.drinks;
  }

  onDrinkChangeClick() {
    this.getRandomDrink().then((drinks) => {
      this.drink = drinks[0];
    });
  }
}
