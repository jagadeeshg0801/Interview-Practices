import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormArrayExampleComponent } from './reactive-form-array-example.component';

describe('ReactiveFormArrayExampleComponent', () => {
  let component: ReactiveFormArrayExampleComponent;
  let fixture: ComponentFixture<ReactiveFormArrayExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormArrayExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormArrayExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
