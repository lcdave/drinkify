import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultInterface } from './../../interfaces/SearchResult';

@Component({
  selector: 'searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss'],
})
export class SearchresultComponent implements OnInit {
  @Input() searchResult = {} as SearchResultInterface;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onShowDetailClick(idDrink: String) {
    this.router.navigate(['/drink-detail', idDrink]);
  }
}
