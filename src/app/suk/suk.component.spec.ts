import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukComponent } from './suk.component';

describe('SukComponent', () => {
  let component: SukComponent;
  let fixture: ComponentFixture<SukComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
