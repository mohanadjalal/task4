import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFromInputComponent } from './dynamic-from-input.component';

describe('DynamicFromInputComponent', () => {
  let component: DynamicFromInputComponent;
  let fixture: ComponentFixture<DynamicFromInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFromInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFromInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
