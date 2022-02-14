import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { TechnologiesComponent } from './main/technologies/technologies.component';
import { TutorialComponent } from './main/tutorial/tutorial.component';

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
    component: TutorialComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
