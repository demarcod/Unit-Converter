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

  constructor() {}


  convert(){
    if(this.vol=='Litres' && this.cVol == 'Cups'){
      this.litresToCups();
    }
    else if(this.vol=='Cups' && this.cVol == 'Litres'){
      this.cupsToLitres();
    }
  }
  litresToCups(){

    this.ans = this.valu / 3.51951;

  }
  cupsToLitres(){ 
    this.ans = this.valu * 3.51951;
  }
  
}


