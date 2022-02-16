import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CoursesService } from 'src/app/shared/services/courses.service';

import json from '../../mockData/mockData.json';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  modalRef?: BsModalRef;
  modalTitle:any;
  technologies:any;
  tutorials:any;
  constructor(private coursesService:CoursesService, private modalService: BsModalService,public router:Router) { }

  ngOnInit(): void {
    this.coursesService.getTechnologies().subscribe((res:any)=>{
      this.technologies = res;
    })
    //this.technologies = json.technologies;  // from mockData
  }

  openTutorialsModal(template: TemplateRef<any>,techId:any,techTitle:any) {
    this.modalRef = this.modalService.show(template);
    this.modalTitle = techTitle;
    this.coursesService.getTutorialsByTechId(techId).subscribe((res:any)=>{
      this.tutorials = res;
    })
    //this.tutorials = json.tutorials;  // from mockData
  }

  goToTutorial(tutorial:any){
    this.coursesService.getAllConcepts(tutorial._id).subscribe((concepts:any)=>{
      this.router.navigate([`tutorial/${tutorial.title}/concept/${concepts[0].title}/topic/${concepts[0].topicSequence[0].topicTitle}`],{ queryParams: {topicId:concepts[0].topicSequence[0].topicId, concepts:JSON.stringify(concepts) } });
    });
  }

}
