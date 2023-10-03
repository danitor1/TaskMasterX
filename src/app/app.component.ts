import { Component, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { LightOrDarkService } from './services/light-or-dark/light-or-dark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Title of the proyect
  title = 'TaskMasterX';
  // Scroll to top Button
  windowScrolled!: boolean;
  // Data from My Output Service to change color of Music button
  dataOutput: boolean = false;
  // Light and Dark modes for Music button
  darkMode: boolean = false;
  // Create a property for the subscription
  private eventSubscription!: Subscription;

  constructor(
    // Light or Dark Service for button to top from Home Component
    private lightOrDarkService: LightOrDarkService
  ) {}

  ngOnInit() {
    // Subscribe to Light or Dark modes with service for change the button to top
    this.eventSubscription = this.lightOrDarkService
      .getEvent()
      .subscribe(() => {
        this.darkMode = !this.darkMode;
      });
  }

  // @HostListener for window scroll (0,0)
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY >= 80) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }
  }

  // Click button for window scroll (0,0)
  linksToTop() {
    window.scroll(0, 0);
  }

  // Unsubscribe when the component is destroyed
  ngOnDestroy() {
    if (this.eventSubscription) {
      this.eventSubscription.unsubscribe();
    }
  }
}
