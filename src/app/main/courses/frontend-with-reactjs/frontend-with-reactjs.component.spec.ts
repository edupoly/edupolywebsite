import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendWithReactjsComponent } from './frontend-with-reactjs.component';

describe('FrontendWithReactjsComponent', () => {
  let component: FrontendWithReactjsComponent;
  let fixture: ComponentFixture<FrontendWithReactjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontendWithReactjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontendWithReactjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
