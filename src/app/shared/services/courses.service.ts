import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  technologiesUrl = "http://localhost:4000/tutorial/technologiesList";
  tutorialsUrl = "http://localhost:4000/tutorial/tutorialListByTechnologyId";
  topicUrl = "http://localhost:4000/tutorial/topicByTopicId";
  conceptsUrl = "http://localhost:4000/tutorial/conceptListByTutorialId";
  constructor(private http:HttpClient) { }

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
