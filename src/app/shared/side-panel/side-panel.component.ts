import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {
  allConcepts: any;
  urlParams:any;
  urlQueryParams:any;
  currentTopicId:any;
  constructor(public ar:ActivatedRoute, private coursesService:CoursesService,private router:Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((res)=>{
      this.urlParams = res;
    });
    this.ar.queryParams.subscribe((res)=>{
      if(this.coursesService.currentWebConcepts!==res.concepts){
        this.coursesService.currentWebConcepts = res.concepts;
        this.urlQueryParams = res;
        this.allConcepts = JSON.parse(res.concepts);
        this.currentTopicId = this.urlQueryParams.topicId;
      }
    });
  }

  setCurrentTopicId(topic:any){
    this.currentTopicId = topic.topicId;
    this.router.navigate([`/tutorial/${this.urlParams.tutorialTitle}/concept/${this.urlParams.conceptTitle}/topic/${topic.TopicTitleComponent}`],{ queryParams: {topicId:topic.topicId, concepts:this.urlQueryParams.concepts } })
  }

}
