import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchfieldComponent } from './searchfield/searchfield.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    SidenavigationComponent,
    TopbarComponent,
    SearchfieldComponent,
    SearchresultComponent,
    routingComponents,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
