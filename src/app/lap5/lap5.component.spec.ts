import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap5Component } from './lap5.component';

describe('Lap5Component', () => {
  let component: Lap5Component;
  let fixture: ComponentFixture<Lap5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lap5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lap5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
