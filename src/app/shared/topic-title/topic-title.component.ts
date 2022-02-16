import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-topic-title',
  templateUrl: './topic-title.component.html',
  styleUrls: ['./topic-title.component.scss']
})
export class TopicTitleComponent implements OnInit {
  @Input() topic:any;
  topicTitle:any;
  urlParams:any;
  urlQueryParams:any;
  constructor(private coursesService:CoursesService,public ar:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.coursesService.getTopicByTopicId(this.topic.topicId).subscribe((res:any)=>{
      this.topicTitle = res[0].title;
    })
    this.ar.params.subscribe((res)=>{
      this.urlParams = res;
    })
    this.ar.queryParams.subscribe((res)=>{
      this.urlQueryParams = res;
    })
  }

  loadSelectedTopic(topicId:any){
    this.router.navigate([`tutorial/${this.urlParams.tutorialTitle}/concept/${this.urlParams.conceptTitle}/topic/${this.urlParams.topicTitle}`],{ queryParams: {topicId:topicId, concepts:this.urlQueryParams.concepts } })
  }

}
