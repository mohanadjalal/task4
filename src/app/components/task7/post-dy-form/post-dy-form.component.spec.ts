import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDyFormComponent } from './post-dy-form.component';

describe('PostDyFormComponent', () => {
  let component: PostDyFormComponent;
  let fixture: ComponentFixture<PostDyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
