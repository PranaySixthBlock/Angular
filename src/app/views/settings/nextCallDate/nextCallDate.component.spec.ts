import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextCallDateComponent } from './nextCallDate.component';

describe('NextCallDateComponent', () => {
  let component: NextCallDateComponent;
  let fixture: ComponentFixture<NextCallDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextCallDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextCallDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
