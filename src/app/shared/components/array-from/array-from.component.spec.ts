import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayFromComponent } from './array-from.component';

describe('ArrayFromComponent', () => {
  let component: ArrayFromComponent;
  let fixture: ComponentFixture<ArrayFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
