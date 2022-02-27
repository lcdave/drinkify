import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryDrinkInterface } from '../../interfaces/CategoryDrink';

@Component({
  selector: 'categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.scss'],
})
export class CategoriesDetailComponent implements OnInit {
  subcategory = '' as string | null;
  name = '' as string | null;
  drinks = [] as CategoryDrinkInterface[];
  p: number = 1;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.subcategory = this.route.snapshot.paramMap.get('subcategory');
    this.name = this.route.snapshot.paramMap.get('name');
  }

  async ngOnInit(): Promise<void> {
    this.drinks = await this.getDrinksByCategory();
  }

  async getDrinksByCategory(): Promise<CategoryDrinkInterface[]> {
    let apiURL = '';

    // TODO(davide): snailcase name before concat
    switch (this.subcategory) {
      case 'types':
        apiURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${this.name}`;
    }

    const response = await fetch(apiURL);
    const data = await response.json();

    console.log(data);

    return data.drinks;
  }
}
