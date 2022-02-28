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
  filteredCategories: any[];
  p: number = 1;

  constructor(private router: Router) {
    this.categoriesUrls = {
      c: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
      g: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list',
      i: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list',
      a: 'https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list',
    };
    this.types = [];
    this.categories = [];
    this.filteredCategories = [];
  }

  ngOnInit(): void {
    this.setCategories();
  }

  async setCategories() {
    for (const [key] of Object.entries(this.categoriesUrls)) {
      const category = await this.getCategory(this.categoriesUrls[key]);

      category.forEach((item) => {
        /*
         * every category has a different key in the object.
         * because of this we have to build a new array with all the categories and their names
         * ORIGINAL Example: drinks.strCategory = 'Ordinary Drink' // drinks.strGlass = 'Highball Glass'
         * NEW Example: categories[{name: "Ordinary Drink", subcategory: "c"}]
         */
        let valueArray = Object.values(item);

        let categoryObject = {
          name: valueArray[0],
          subcategoryKey: key,
          subcategoryName: this.getCategoryNameByKey(key),
        };

        this.categories.push(categoryObject);
      });
    }

    this.filteredCategories = this.categories;
  }

  async getCategory(url: string): Promise<any[]> {
    const response = await fetch(url);
    const data = await response.json();

    return data.drinks;
  }

  getCategoryNameByKey(key: string): string {
    switch (key) {
      case 'c':
        return 'Type';
      case 'g':
        return 'Glass';
      case 'i':
        return 'Ingredient';
      case 'a':
        return 'Alcoholic';
      default:
        return 'Unknown';
    }
  }

  onFilterChange(event: any) {
    let selected = event.target.value;

    if (selected) {
      this.filteredCategories = this.categories.filter(
        (category) => category.subcategoryKey === selected
      );
    } else {
      this.filteredCategories = this.categories;
    }
  }

  async onShowDrinksClick(name: string, subcategory: string) {
    this.router.navigate(['/categories', subcategory, name]);
  }
}
