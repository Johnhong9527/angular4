import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFromComponent } from './hero-from.component';

describe('HeroFromComponent', () => {
  let component: HeroFromComponent;
  let fixture: ComponentFixture<HeroFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
