import { Output, Component, OnInit, EventEmitter, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { DrinkInterface } from '../../interfaces/Drink';
import { SearchResultInterface } from './../../interfaces/SearchResult';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
})
export class SearchfieldComponent implements OnInit {
  name: FormControl;
  apiURL: String;
  searchResult: SearchResultInterface;
  drinks: Array<DrinkInterface>;
  inputClass: String;
  faSearch: any;

  @Output() newDrinksEvent = new EventEmitter<SearchResultInterface>();

  constructor() {
    this.name = new FormControl('');
    this.apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    this.searchResult = {
      done: false,
      drinks: [],
    };
    this.drinks = [];
    this.inputClass = 'input';
    this.faSearch = faSearch;

    this.name.valueChanges.pipe(debounceTime(200)).subscribe((res) => {
      if (this.name.value != '') {
        let apiURLWithSearchString = this.apiURL + this.name.value;
        this.setDrinks(apiURLWithSearchString);
      } else {
        this.searchResult.drinks = [];
        this.searchResult.done = false;
        this.newDrinksEvent.emit(this.searchResult);
        this.inputClass = 'input';
      }
    });
  }

  ngOnInit(): void {}

  async setDrinks(url: string) {
    await fetch(url).then((response) => {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status
        );
        return;
      }
      response.json().then((data) => {
        this.searchResult = {
          done: true,
          drinks: data.drinks,
        };
        this.newDrinksEvent.emit(this.searchResult);
        this.inputClass = 'input has-result';
      });
    });
  }
}
