import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  tutorialId:any;
  allConcepts: any;
  topicSequence: any;
  topics:any;
  urlQueryParams:any

  constructor(private router:Router, private coursesService:CoursesService,public ar:ActivatedRoute) { }

  ngOnInit(): void {   
    this.ar.queryParams.subscribe((res)=>{
      this.urlQueryParams = res;
      this.allConcepts = JSON.parse(res.concepts);
    })
  }
}
