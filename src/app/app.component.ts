import { Component } from '@angular/core';
import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
// loads the Icon plugin
// UIkit.use(Icons);

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
