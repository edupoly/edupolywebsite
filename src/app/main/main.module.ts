import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TopicContentComponent } from './topic-content/topic-content.component';



@NgModule({
  declarations: [
    HomeComponent,
    TechnologiesComponent,
    TutorialComponent,
    TopicContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class MainModule { }
