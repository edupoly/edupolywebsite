import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusTrainingComponent } from './campus-training.component';

describe('CampusTrainingComponent', () => {
  let component: CampusTrainingComponent;
  let fixture: ComponentFixture<CampusTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
