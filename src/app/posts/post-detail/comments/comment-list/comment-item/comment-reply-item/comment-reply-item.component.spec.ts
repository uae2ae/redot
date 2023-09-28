import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentReplyItemComponent } from './comment-reply-item.component';

describe('CommentReplyItemComponent', () => {
  let component: CommentReplyItemComponent;
  let fixture: ComponentFixture<CommentReplyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentReplyItemComponent]
    });
    fixture = TestBed.createComponent(CommentReplyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
