import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  name: string = 'Mousa';
  birthYear: number = 1986;
  age: number = 0;

  constructor() {}

  calcAge() {
    this.age = 2021 - this.birthYear;
  }

  reset() {
    this.name = undefined;
    this.birthYear = undefined;
    this.age = undefined;
  }
}
