import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tap: number = 0;
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;

  constructor(public navCtrl: NavController) {

  }

  tapEvent(e) {
    this.tap++
  }
  pressEvent(e) {
    this.press++
  }
  panEvent(e) {
    this.pan++
  }
  swipeEvent(e) {
    this.swipe++
  }

}
