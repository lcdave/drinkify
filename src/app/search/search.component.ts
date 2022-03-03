import { SearchResultInterface } from './../../interfaces/SearchResult';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  title = 'drinkify';
  searchResult: SearchResultInterface;

  constructor() {
    this.searchResult = { done: false, drinks: [] };
  }

  ngOnInit(): void {}

  drinksEventEmit(searchResult: SearchResultInterface) {
    this.searchResult = searchResult;
  }
}
