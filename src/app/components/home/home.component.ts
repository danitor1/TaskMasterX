import { Component } from '@angular/core';
import { LightOrDarkService } from 'src/app/services/light-or-dark/light-or-dark.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // Property for change mode
  darkMode: boolean = false;

  constructor(
    // Light or Dark Service for button to top on App Component
    private lightOrDarkService: LightOrDarkService
  ) {}

  // Change between Light & Dark modes
  changeMode() {
    this.darkMode = !this.darkMode;
    // Light or Dark Service for button to top on App Component
    this.lightOrDarkService.emitEvent();
  }
}
