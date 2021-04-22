import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesFlexoComponent } from './services-flexo.component';

describe('ServicesFlexoComponent', () => {
  let component: ServicesFlexoComponent;
  let fixture: ComponentFixture<ServicesFlexoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesFlexoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesFlexoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
