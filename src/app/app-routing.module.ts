import { FullstackWithMernComponent } from './main/courses/fullstack-with-mern/fullstack-with-mern.component';
import { FullstackWithMeanComponent } from './main/courses/fullstack-with-mean/fullstack-with-mean.component';
import { FrontendWithReactjsComponent } from './main/courses/frontend-with-reactjs/frontend-with-reactjs.component';
import { FrontendWithAngularComponent } from './main/courses/frontend-with-angular/frontend-with-angular.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { TechnologiesComponent } from './main/technologies/technologies.component';
import { BootcampTrainingComponent } from './main/trainings/bootcamp-training/bootcamp-training.component';
import { CampusTrainingComponent } from './main/trainings/campus-training/campus-training.component';
import { CorporateTrainingComponent } from './main/trainings/corporate-training/corporate-training.component';
import { TutorialComponent } from './main/tutorial/tutorial.component';
import { TopicComponent } from './shared/topic/topic.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"frontend-with-angular",
    component: FrontendWithAngularComponent
  },
  {
    path: "frontend-with-reactjs",
    component: FrontendWithReactjsComponent
  },
  {
    path: "fullstack-with-mean",
    component: FullstackWithMeanComponent
  },
  {
    path: "fullstack-with-mern",
    component: FullstackWithMernComponent
  },
  {
    path: "tutorials",
    component: TechnologiesComponent
  },
  {
    path: 'tutorial/:tutorialTitle/concept/:conceptTitle/topic/:topicTitle',
    component: TutorialComponent,
    children:[
      {
        path: '',
        component: TopicComponent
      }
    ]
  },
  {
    path: 'corporate-training',
    component: CorporateTrainingComponent
  },
  {
    path: 'bootcamp-training',
    component: BootcampTrainingComponent
  },
  {
    path: 'campus-training',
    component: CampusTrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
