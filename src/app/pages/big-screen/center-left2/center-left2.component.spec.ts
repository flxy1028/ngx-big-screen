/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CenterLeft2Component } from './center-left2.component';

describe('CenterLeft2Component', () => {
  let component: CenterLeft2Component;
  let fixture: ComponentFixture<CenterLeft2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterLeft2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterLeft2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
