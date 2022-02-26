import { Component, Input, OnInit } from '@angular/core';

interface Drink {
  strDrink: string;
  strDrinkThumb: string;
}

@Component({
  selector: 'searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss']
})

export class SearchresultComponent implements OnInit {

 @Input() drinks = [] as Array<Drink>; 
  
  ngOnInit(): void {}
}
