import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TopicContentComponent } from './topic-content/topic-content.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CorporateTrainingComponent } from './trainings/corporate-training/corporate-training.component';
import { BootcampTrainingComponent } from './trainings/bootcamp-training/bootcamp-training.component';
import { CampusTrainingComponent } from './trainings/campus-training/campus-training.component';


@NgModule({
  declarations: [
    HomeComponent,
    TechnologiesComponent,
    TutorialComponent,
    TopicContentComponent,
    CorporateTrainingComponent,
    BootcampTrainingComponent,
    CampusTrainingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    CarouselModule
  ],
  exports: [
    HomeComponent
  ]
})
export class MainModule { }
