import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNonBindableDemoComponent } from './ng-non-bindable-demo.component';

describe('NgNonBindableDemoComponent', () => {
  let component: NgNonBindableDemoComponent;
  let fixture: ComponentFixture<NgNonBindableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgNonBindableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNonBindableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
