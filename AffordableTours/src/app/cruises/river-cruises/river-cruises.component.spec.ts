import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverCruisesComponent } from './river-cruises.component';

describe('RiverCruisesComponent', () => {
  let component: RiverCruisesComponent;
  let fixture: ComponentFixture<RiverCruisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverCruisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverCruisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
