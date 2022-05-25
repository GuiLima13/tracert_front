import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliationStarComponent } from './avaliation-star.component';

describe('AvaliationStarComponent', () => {
  let component: AvaliationStarComponent;
  let fixture: ComponentFixture<AvaliationStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliationStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliationStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
