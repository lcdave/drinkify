import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faGlassMartini,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sidenavigation',
  templateUrl: './sidenavigation.component.html',
  styleUrls: ['./sidenavigation.component.scss'],
})
export class SidenavigationComponent implements OnInit {
  title: string;
  faHome: any;
  faGlassMartini: any;
  faDiceSix: any;

  constructor() {
    this.title = 'DRINKIFY';
    this.faHome = faHome;
    this.faGlassMartini = faGlassMartini;
    this.faDiceSix = faDiceSix;
  }

  ngOnInit(): void {}
}
