import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:subcategory/:name',
    component: CategoriesDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  CategoriesComponent,
  CategoriesDetailComponent,
  SearchComponent,
];
