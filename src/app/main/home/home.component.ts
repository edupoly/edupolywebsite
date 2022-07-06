import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clientLogos = [
    'assets/whitehat-logo.svg',
    'assets/changed/Cognizant_logo_2022.png',
    'assets/dassault.png',
    'assets/changed/datagrid.png',
    'assets/changed/syntel.png',
    'assets/changed/merit-logo.webp',
    'assets/c360.png',
    'assets/west agile.png',
    'assets/infinitylogo3.png',
    'assets/TRST01.png',
    'assets/changed/xrg.png',
    'assets/clients/allentics.jpg'
  ]

  titletext: string = "EduPoly - Angular,ReactJS,Frontend,Backend,Full Stack,MEAN stack,MERN stack Training in Hyderabad";
  constructor(private titleService:Title) { }



  ngOnInit(): void {
    this.titleService.setTitle(this.titletext);
  }

}
