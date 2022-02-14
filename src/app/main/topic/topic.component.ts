import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  currentTopicId:any;
  currentTopicContent:any;
  constructor(private ar:ActivatedRoute, private coursesService:CoursesService) { }

  ngOnInit(): void {
    this.ar.queryParams.subscribe((res)=>{
      this.coursesService.getTopicByTopicId(res.topicId).subscribe((res:any)=>{
        this.currentTopicContent = res[0].content;
      });
    });  
  }

}
