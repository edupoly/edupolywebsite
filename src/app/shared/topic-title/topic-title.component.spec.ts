import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicTitleComponent } from './topic-title.component';

describe('TopicTitleComponent', () => {
  let component: TopicTitleComponent;
  let fixture: ComponentFixture<TopicTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
