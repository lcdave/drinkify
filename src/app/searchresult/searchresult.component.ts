import { Component, Input, OnInit } from '@angular/core';
import { DrinkInterface } from '../../interfaces/Drink';

@Component({
  selector: 'searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss'],
})
export class SearchresultComponent implements OnInit {
  @Input() drinks = [] as Array<DrinkInterface>;

  ngOnInit(): void {}
}
