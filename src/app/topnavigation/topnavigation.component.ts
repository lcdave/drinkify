import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'topnavigation',
  templateUrl: './topnavigation.component.html',
  styleUrls: ['./topnavigation.component.scss'],
})
export class TopnavigationComponent implements OnInit {
  isActive: boolean;
  constructor() {
    this.isActive = false;
  }

  ngOnInit(): void {}

  toggleMenu() {
    this.isActive = !this.isActive;
  }
}
