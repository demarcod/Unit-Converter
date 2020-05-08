import { Component } from '@angular/core';
import { shadow } from '@ionic/core/dist/types/utils/transition/ios.transition';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  vol = "Litres";
  cVol;
  tap;

  constructor() {}


  convert(){
    
  }

  cupsToLitres(){

  }
}


