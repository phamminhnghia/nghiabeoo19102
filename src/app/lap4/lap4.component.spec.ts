import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lap4Component } from './lap4.component';

describe('Lap4Component', () => {
  let component: Lap4Component;
  let fixture: ComponentFixture<Lap4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lap4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lap4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
