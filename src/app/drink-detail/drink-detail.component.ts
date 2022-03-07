import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkInterface } from '../../interfaces/Drink';
import {
  faGlassMartiniAlt,
  faLongArrowAltLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drink-detail',
  templateUrl: './drink-detail.component.html',
  styleUrls: ['./drink-detail.component.scss'],
})
export class DrinkDetailComponent implements OnInit {
  id: string | null;
  apiURL: string;
  drinks: Array<DrinkInterface> = [];
  faGlassMartiniAlt: any;
  faLongArrowAltLeft: any;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('idDrink');
    this.apiURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
    this.faGlassMartiniAlt = faGlassMartiniAlt;
    this.faLongArrowAltLeft = faLongArrowAltLeft;
  }

  ngOnInit(): void {
    let apiURLWithSearchString = this.apiURL + String(this.id);
    this.setDrinkDetail(apiURLWithSearchString);
  }

  async setDrinkDetail(url: string) {
    await fetch(url).then((response) => {
      if (response.status !== 200) {
        console.log(
          'Looks like there was a problem. Status Code: ' + response.status
        );
        return;
      }
      response.json().then((data) => {
        console.log(data);
        this.drinks = data.drinks;
      });
    });
  }

  onBackClick() {
    window.history.back();
  }
}
