import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsBehaviorExampleComponent } from './subjects-behavior-example.component';

describe('SubjectsBehaviorExampleComponent', () => {
  let component: SubjectsBehaviorExampleComponent;
  let fixture: ComponentFixture<SubjectsBehaviorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectsBehaviorExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsBehaviorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
