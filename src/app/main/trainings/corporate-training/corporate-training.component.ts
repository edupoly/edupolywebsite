import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-training',
  templateUrl: './corporate-training.component.html',
  styleUrls: ['./corporate-training.component.scss']
})
export class CorporateTrainingComponent implements OnInit {
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
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
