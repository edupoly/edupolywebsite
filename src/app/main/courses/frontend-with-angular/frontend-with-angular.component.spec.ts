import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendWithAngularComponent } from './frontend-with-angular.component';

describe('FrontendWithAngularComponent', () => {
  let component: FrontendWithAngularComponent;
  let fixture: ComponentFixture<FrontendWithAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendWithAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendWithAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
