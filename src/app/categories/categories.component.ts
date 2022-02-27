import { Component, OnInit } from '@angular/core';
import { DrinkTypesInterface } from '../../interfaces/DrinkTypes';
import { CategoriesUrlsInterface } from './../../interfaces/CategoriesUrls';
import { Router } from '@angular/router';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categoriesUrls: CategoriesUrlsInterface;
  types: Array<DrinkTypesInterface>;
  categories: any[];

  constructor(private router: Router) {
    this.categoriesUrls = {
      types: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
      glasses: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list',
    };
    this.types = [];
    this.categories = [];
  }

  ngOnInit(): void {
    this.setCategories();
  }

  async setCategories() {
    for (const [value] of Object.entries(this.categoriesUrls)) {
      console.log(value);
      const category = await this.getCategory(this.categoriesUrls[value]);
      console.log(category);
      this.categories = this.categories.concat(category);
    }
  }

  async getCategory(url: string): Promise<any[]> {
    const response = await fetch(url);
    const data = await response.json();

    console.log('data: ', data);

    return data.drinks;
  }

  async onShowDrinksClick(name: string, subcategory: string) {
    this.router.navigate(['/categories', subcategory, name]);
  }
}
