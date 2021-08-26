import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCallStatusComponent } from './createCallStatus.component';

describe('CreateCallStatusComponent', () => {
  let component: CreateCallStatusComponent;
  let fixture: ComponentFixture<CreateCallStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCallStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCallStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
