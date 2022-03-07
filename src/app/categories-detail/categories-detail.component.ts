import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoryDrinkInterface } from '../../interfaces/CategoryDrink';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

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
  faLongArrowAltLeft: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.subcategory = this.route.snapshot.paramMap.get('subcategory');
    this.name = this.route.snapshot.paramMap.get('name');
    this.faLongArrowAltLeft = faLongArrowAltLeft;
  }

  async ngOnInit(): Promise<void> {
    this.drinks = await this.getDrinksByCategory();
  }

  async getDrinksByCategory(): Promise<CategoryDrinkInterface[]> {
    // TODO(davide): snailcase name before concat
    let apiURL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${this.subcategory}=${this.name}`;

    const response = await fetch(apiURL);
    const data = await response.json();

    console.log(data);

    return data.drinks;
  }
  onShowDetailClick(idDrink: String) {
    this.router.navigate(['/drink-detail', idDrink]);
  }
}
