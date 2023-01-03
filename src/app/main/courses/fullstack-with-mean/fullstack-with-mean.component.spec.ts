import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackWithMeanComponent } from './fullstack-with-mean.component';

describe('FullstackWithMeanComponent', () => {
  let component: FullstackWithMeanComponent;
  let fixture: ComponentFixture<FullstackWithMeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullstackWithMeanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullstackWithMeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
