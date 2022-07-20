import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDyFormComponent } from './user-dy-form.component';

describe('UserDyFormComponent', () => {
  let component: UserDyFormComponent;
  let fixture: ComponentFixture<UserDyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDyFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
