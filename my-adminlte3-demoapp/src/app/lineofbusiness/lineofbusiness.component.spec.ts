import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineofbusinessComponent } from './lineofbusiness.component';

describe('LineofbusinessComponent', () => {
  let component: LineofbusinessComponent;
  let fixture: ComponentFixture<LineofbusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineofbusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineofbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
