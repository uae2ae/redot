import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredotComponent } from './subredot.component';

describe('SubredotComponent', () => {
  let component: SubredotComponent;
  let fixture: ComponentFixture<SubredotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubredotComponent]
    });
    fixture = TestBed.createComponent(SubredotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
