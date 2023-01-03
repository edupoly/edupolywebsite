import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackWithMernComponent } from './fullstack-with-mern.component';

describe('FullstackWithMernComponent', () => {
  let component: FullstackWithMernComponent;
  let fixture: ComponentFixture<FullstackWithMernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullstackWithMernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullstackWithMernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
