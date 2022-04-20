import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  allConcepts: any;
  urlParams:any;
  urlQueryParams:any;
  tutorialTitle:any
  currentTopicId:any;
  
  constructor(public ar:ActivatedRoute,private router:Router,private coursesService:CoursesService) {
   }

  ngOnInit(): void {
    this.ar.params.subscribe((res)=>{
      this.urlParams = res;
      this.tutorialTitle = this.urlParams.tutorialTitle;
    })
    this.ar.queryParams.subscribe((res)=>{
      if(this.coursesService.currentMobileConcepts!==res.concepts){
        this.coursesService.currentMobileConcepts = res.concepts;
        this.urlQueryParams = res;
        this.allConcepts = JSON.parse(res.concepts);
        this.currentTopicId = this.urlQueryParams.topicId;
      }
    })
  }

  setCurrentTopicId(topic:any){
    this.currentTopicId = topic.topicId;
    this.router.navigate([`/tutorial/${this.urlParams.tutorialTitle}/concept/${this.urlParams.conceptTitle}/topic/${topic.TopicTitleComponent}`],{ queryParams: {topicId:topic.topicId, concepts:this.urlQueryParams.concepts } })
  }

}
