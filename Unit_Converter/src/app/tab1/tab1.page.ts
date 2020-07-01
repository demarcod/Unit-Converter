import { Component } from '@angular/core';
import { shadow } from '@ionic/core/dist/types/utils/transition/ios.transition';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  vol = 'Litres';
  cVol = 'Cups';
  valu;
  ans;
  rate;

  constructor() {}


  convert() {
    if (this.vol == 'Litres' && this.cVol == 'Cups') {
      this.rate = 4.22675;
    }
    else if (this.vol == 'Cups' && this.cVol == 'Litres') {
      this.rate = 0.236588;
    }
    else if (this.vol == 'Cups' && this.cVol == 'Teaspoons') {
      this.rate = 48;
    }
    else if (this.vol == 'Teaspoons' && this.cVol == 'Cups') {
      this.rate = 0.0208333;
    }
    else if (this.vol == 'Teaspoons' && this.cVol == 'Litres') {
      this.rate = 0.00492892;
    }
    else if (this.vol == 'Litres' && this.cVol == 'Teaspoons') {
      this.rate = 202.884 ;
    }
    else if (this.vol == 'Tablespoons' && this.cVol == 'Teaspoons') {
      this.rate = 3;
    }
    else if (this.vol == 'Teaspoons' && this.cVol == 'Tablespoons') {
      this.rate = 0.333333 ;
    }
    else if (this.vol == 'Tablespoons' && this.cVol == 'Cups') {
      this.rate = 0.0625;
    }
    else if (this.vol == 'Cups' && this.cVol == 'Tablespoons') {
      this.rate = 16;
    }
    else if (this.vol == 'Tablespoons' && this.cVol == 'Litres') {
      this.rate = 0.0147868;
    }
    else if (this.vol == 'Litres' && this.cVol == 'Tablespoons') {
      this.rate = 67.628;
    } 

    this.ans = this.precise_round(this.valu * this.rate, 4);
  }

  precise_round(num, dec){
 
    if ((typeof num !== 'number') || (typeof dec !== 'number')) 
  return false; 
  
    var num_sign = num >= 0 ? 1 : -1;
      
    return (Math.round((num*Math.pow(10,dec))+(num_sign*0.0001))/Math.pow(10,dec)).toFixed(dec);
  } 
}


