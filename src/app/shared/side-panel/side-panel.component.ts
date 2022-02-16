import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  allConcepts: any;
  urlQueryParams:any;

  constructor(public ar:ActivatedRoute) { }

  ngOnInit(): void {   
    this.ar.queryParams.subscribe((res)=>{
      this.urlQueryParams = res;
      this.allConcepts = JSON.parse(res.concepts);
    })
  }
}
