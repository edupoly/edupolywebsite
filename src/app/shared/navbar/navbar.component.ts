import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  allConcepts: any;
  urlQueryParams:any;
  tutorialTitle:any

  constructor(public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe((res)=>{
      this.tutorialTitle = res.tutorialTitle;
    })
    this.ar.queryParams.subscribe((res)=>{
      this.urlQueryParams = res;
      this.allConcepts = JSON.parse(res.concepts);
    })
  }

}
