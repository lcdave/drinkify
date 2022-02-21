import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { TopbarComponent } from './topbar/topbar.component';
import { SearchfieldComponent } from './searchfield/searchfield.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SidenavigationComponent,
    TopbarComponent,
    SearchfieldComponent,
    SearchresultComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
