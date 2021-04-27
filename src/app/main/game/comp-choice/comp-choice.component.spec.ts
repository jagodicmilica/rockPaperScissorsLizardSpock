import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompChoiceComponent } from './comp-choice.component';

describe('CompChoiceComponent', () => {
  let component: CompChoiceComponent;
  let fixture: ComponentFixture<CompChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
