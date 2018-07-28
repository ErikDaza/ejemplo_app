import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario:string = "";

  constructor(public navCtrl: NavController) {

  }
goToPage()
{
  this.navCtrl.push(Page1Page);
}
}