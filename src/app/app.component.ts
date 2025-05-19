import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'portfolio';

  isPlaying: boolean = false;

  togglePlaying() {
    this.isPlaying = !this.isPlaying
  }
}
