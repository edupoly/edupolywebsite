import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { TechnologiesComponent } from './main/technologies/technologies.component';
import { TutorialComponent } from './main/tutorial/tutorial.component';
import { TopicComponent } from './shared/topic/topic.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"tutorials",
    component: TechnologiesComponent
  },
  {
    path: 'tutorial/:tutorialTitle/concept/:conceptTitle/topic/:topicTitle',
    component: TutorialComponent,
    children:[
      {
        path: '',
        component: TopicComponent
      },
      {
        path: 'tutorial/:tutorialTitle/concept/:conceptTitle/topic/:topicTitle',
        component: TopicComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
