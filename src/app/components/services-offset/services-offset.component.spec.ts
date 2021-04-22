import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOffsetComponent } from './services-offset.component';

describe('ServicesOffsetComponent', () => {
  let component: ServicesOffsetComponent;
  let fixture: ComponentFixture<ServicesOffsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesOffsetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesOffsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
