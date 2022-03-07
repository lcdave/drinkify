import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchfieldComponent } from './searchfield/searchfield.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './search/search.component';
import { CategoriesDetailComponent } from './categories-detail/categories-detail.component';
import { RandomDrinkComponent } from './random-drink/random-drink.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { DrinkComponent } from './drink/drink.component';
import { TopnavigationComponent } from './topnavigation/topnavigation.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavigationComponent,
    TopbarComponent,
    SearchfieldComponent,
    SearchresultComponent,
    routingComponents,
    SearchComponent,
    CategoriesDetailComponent,
    DrinkDetailComponent,
    RandomDrinkComponent,
    DrinkComponent,
    TopnavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
