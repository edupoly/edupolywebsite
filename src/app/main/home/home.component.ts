import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clientLogos = [
    'assets/changed/xrg.png',
    'assets/changed/Cognizant_logo_2022.png',
    'assets/dassault.png',
    'assets/changed/datagrid.png',
    'assets/changed/syntel.png',
    'assets/changed/merit-logo.webp',
    'assets/c360.png',
    'assets/west agile.png',
    'assets/infinitylogo3.png',
    'assets/TRST01.png',
    'assets/whitehat-logo.svg',
    'assets/clients/allentics.jpg'
  ]
  constructor() { }



  ngOnInit(): void {
    
  }

}
