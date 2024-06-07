import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {
  currentTopicId:any;
  currentTopicContent:any;
  constructor(private ar: ActivatedRoute, private coursesService: CoursesService, private sanitizer: DomSanitizer, private titleService: Title) { }

  ngOnInit(): void {
    this.ar.queryParams.subscribe((res) => {
      this.currentTopicContent = "";
      this.coursesService.getTopicByTopicId(res.topicId).subscribe((res: any) => {
        this.titleService.setTitle(res[0].title);
        this.currentTopicContent = this.sanitizer.bypassSecurityTrustHtml(res[0].content);
      });
    });
  }

}
