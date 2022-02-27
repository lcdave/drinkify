import { Output, Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { DrinkInterface } from '../../interfaces/Drink';


@Component({
  selector: 'searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
})
export class SearchfieldComponent implements OnInit {
  name: FormControl;
  apiURL: String;
  drinks: Array<DrinkInterface>;

  @Output() newDrinksEvent = new EventEmitter<Array<DrinkInterface>>();

  constructor() {
    this.name = new FormControl('');
    this.apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    this.drinks = [];
    this.name.valueChanges.pipe(debounceTime(1000)).subscribe(res=>{
      console.log(this.name.value);
      if(this.name.value!="") {
        let apiURLWithSearchString = this.apiURL + this.name.value;
        this.setDrinks(apiURLWithSearchString);
      }
      else {
        console.log("entering else")
        this.drinks = [];
        this.newDrinksEvent.emit(this.drinks);
      }
    })
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
        this.drinks = data.drinks;
        this.newDrinksEvent.emit(this.drinks);
      });
    });
  }
}
