import { Output, Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Drink {
  strDrink: string;
}

@Component({
  selector: 'searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
})
export class SearchfieldComponent implements OnInit {
  name: FormControl;
  apiURL: String;
  drinks: Array<Drink>;

  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {
    this.name = new FormControl('');
    this.apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    this.drinks = [];
  }

  ngOnInit(): void {}
  onButtonClick() {
    let apiURLWithSearchString = this.apiURL + this.name.value;
    this.newItemEvent.emit('blub');
    fetch(apiURLWithSearchString).then((response) => {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status
        );
        return;
      }
      response.json().then((data) => {
        this.drinks = data.drinks;
      });
    });
  }
}
