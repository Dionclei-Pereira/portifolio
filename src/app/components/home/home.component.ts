import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  numbers: number[] = [1, 0, 1, 0, 1, 1, 0, 1, 0];
  randomOffsets: number[] = [];

  constructor() {
    this.randomOffsets = this.numbers.map(() => Math.floor(Math.random() * 99));
  }
}
