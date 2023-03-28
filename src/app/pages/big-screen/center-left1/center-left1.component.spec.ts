/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CenterLeft1Component } from './center-left1.component';

describe('CenterLeft1Component', () => {
  let component: CenterLeft1Component;
  let fixture: ComponentFixture<CenterLeft1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterLeft1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterLeft1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
