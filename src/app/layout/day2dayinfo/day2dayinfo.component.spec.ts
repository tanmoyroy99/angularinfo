import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2dayinfoComponent } from './day2dayinfo.component';

describe('Day2dayinfoComponent', () => {
  let component: Day2dayinfoComponent;
  let fixture: ComponentFixture<Day2dayinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Day2dayinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2dayinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
