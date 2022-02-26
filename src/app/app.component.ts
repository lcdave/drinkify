import { Component } from '@angular/core';

interface Drink {
  strDrink: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'drinkify';
  drinks = [] as Drink[];
  

  emitTest(newItem: Array<Drink>) {
    this.drinks = newItem;
  }
}
