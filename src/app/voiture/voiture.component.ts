import { Component } from '@angular/core';

@Component({
    selector: 'app-voiture',
    templateUrl: './voiture.component.html',
    styleUrls: ['./voiture.component.css']
  })
  export class VoitureComponent {
    title = 'voiture';
    marque: string = 'bmw';
    isEnabled: boolean = false;
    if(){
        this.isEnabled = true;
        setTimeout(function(){ alert("Hello"); }, 3000);
    }   
  }