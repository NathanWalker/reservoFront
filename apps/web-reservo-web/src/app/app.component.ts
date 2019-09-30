import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@reservo-front/web';

@Component({
  selector: 'reservo-front-root',
  templateUrl: './app.component.html'
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
