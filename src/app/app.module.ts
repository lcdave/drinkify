import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavigationComponent } from './sidenavigation/sidenavigation.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavigationComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
