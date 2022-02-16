import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  technologiesUrl = `${environment.tutorialApi}technologiesList`;
  tutorialsUrl = `${environment.tutorialApi}tutorialListByTechnologyId`;
  topicUrl = `${environment.tutorialApi}topicByTopicId`;
  conceptsUrl = `${environment.tutorialApi}conceptListByTutorialId`;
  constructor(private http:HttpClient) {
    console.log(environment);
   }

  getTechnologies(){
    return this.http.get(this.technologiesUrl);
  }

  getTutorialsByTechId(techId:any){
    return this.http.get(`${this.tutorialsUrl}?technologyId=${techId}`);
  }

  getTopicByTopicId(topicId:any){
    return this.http.get(`${this.topicUrl}/${topicId}`);
  }

  getAllConcepts(tutorialId:any){
    return this.http.get(`${this.conceptsUrl}?tutorialId=${tutorialId}`);
  }
}
