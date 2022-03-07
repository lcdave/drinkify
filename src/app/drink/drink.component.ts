import { Component, Input, OnInit } from '@angular/core';
import { DrinkInterface } from '../../interfaces/Drink';
import {
  faGlassMartiniAlt,
  faLongArrowAltLeft,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
})
export class DrinkComponent implements OnInit {
  faGlassMartiniAlt: any;
  faLongArrowAltLeft: any;

  @Input() drink = {} as DrinkInterface;

  constructor() {
    this.faGlassMartiniAlt = faGlassMartiniAlt;
    this.faLongArrowAltLeft = faLongArrowAltLeft;
  }

  ngOnInit(): void {}
}
