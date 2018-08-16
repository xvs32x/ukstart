import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import UIkit from 'uikit';

@Component({
  selector: 'app-auth',
  template: `
    <div class="uk-cover-container" uk-height-viewport>
      <video autoplay loop muted playsinline uk-cover>
        <source src="assets/video/auth.mp4" type="video/mp4">
      </video>
    </div>
    <div class="overlay">
      <div class="uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
        <div class="uk-background-secondary uk-width-1-1">
          <div class="uk-light uk-padding" style="width: 300px; margin: 0 auto;">
            <h3>Login</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button class="uk-button uk-button-default">Button</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    ':host {position: relative; display: block;}',
    '.overlay {top: 0; left: 0; bottom:0; right:0; position: absolute; color: #fff;}',
    '.uk-background-secondary {background: rgba(0,0,0, .8)}'
  ]
})

export class AuthComponent implements OnInit, AfterViewInit {
  constructor(private el: ElementRef) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    UIkit.cover(this.el);
  }
}
