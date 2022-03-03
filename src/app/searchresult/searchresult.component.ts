import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinkInterface } from '../../interfaces/Drink';

@Component({
  selector: 'searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.scss'],
})
export class SearchresultComponent implements OnInit {
  @Input() drinks = [] as Array<DrinkInterface>;

  constructor(private router:Router){
    
  }

  ngOnInit(): void {}



onShowDetailClick(idDrink:String){
  console.log(idDrink);
  this.router.navigate(['/drink-detail',idDrink]);

}
}