import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

import { RouterModule } from '@angular/router';
import { TopicTitleComponent } from './topic-title/topic-title.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidePanelComponent,
    TopicTitleComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports:[HeaderComponent, SidePanelComponent,NavbarComponent]
})
export class SharedModule { }
