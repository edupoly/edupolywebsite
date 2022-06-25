import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-corporate-training',
  templateUrl: './corporate-training.component.html',
  styleUrls: ['./corporate-training.component.scss']
})
export class CorporateTrainingComponent implements OnInit {
  titletext: string = "EduPoly Corporate Training - Angular,ReactJS,Frontend,Backend,Full Stack,MEAN stack,MERN stack Training in Hyderabad";
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
  constructor(private titleService:Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.titletext);
  }

}
