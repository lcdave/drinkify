import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'drinkify';

  emitTest(newItem: string) {
    console.log('emitTest: ', newItem);
  }
}