import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleNavigationComponent } from './middle-navigation.component';

describe('MiddleNavigationComponent', () => {
  let component: MiddleNavigationComponent;
  let fixture: ComponentFixture<MiddleNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddleNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
