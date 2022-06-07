import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampTrainingComponent } from './bootcamp-training.component';

describe('BootcampTrainingComponent', () => {
  let component: BootcampTrainingComponent;
  let fixture: ComponentFixture<BootcampTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
