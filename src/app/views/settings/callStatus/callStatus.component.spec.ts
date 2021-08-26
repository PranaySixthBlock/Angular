import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallStatusComponent } from './callStatus.component';

describe('CallStatusComponent', () => {
  let component: CallStatusComponent;
  let fixture: ComponentFixture<CallStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
