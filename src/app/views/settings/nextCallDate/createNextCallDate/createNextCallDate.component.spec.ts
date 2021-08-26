import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNextCallDateComponent } from './createNextCallDate.component';

describe('CreateNextCallDateComponent', () => {
  let component: CreateNextCallDateComponent;
  let fixture: ComponentFixture<CreateNextCallDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNextCallDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNextCallDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
