import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  edupoly = "{ EduPoly }";
  modalRef?: BsModalRef;

  constructor(private modalService: BsModalService, private coursesService:CoursesService) { }

  ngOnInit(): void {
  }

  clearCurrentUrlData(){
    this.coursesService.currentWebConcepts = undefined;
    this.coursesService.currentMobileConcepts = undefined;
  }

  openMenuModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    this.clearCurrentUrlData();
  }

}
