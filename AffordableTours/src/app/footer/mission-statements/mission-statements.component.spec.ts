import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionStatementsComponent } from './mission-statements.component';

describe('MissionStatementsComponent', () => {
  let component: MissionStatementsComponent;
  let fixture: ComponentFixture<MissionStatementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionStatementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionStatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
