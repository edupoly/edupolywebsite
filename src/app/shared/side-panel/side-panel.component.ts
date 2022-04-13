import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  allConcepts: any;
  urlQueryParams:any;
  currentTopicId:any;
  constructor(public ar:ActivatedRoute, private coursesService:CoursesService) { }

  ngOnInit(): void {   
    
    this.ar.queryParams.subscribe((res)=>{
      if(this.coursesService.currentConcepts!==res.concepts){
        this.coursesService.currentConcepts = res.concepts;
        this.urlQueryParams = res;
        this.allConcepts = JSON.parse(res.concepts);
        this.currentTopicId = this.urlQueryParams.topicId;
      }
    })
  }

  setCurrentTopicId(topicId:any){
    this.currentTopicId = topicId;
  }
}
