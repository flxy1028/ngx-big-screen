/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CenterRight2Component } from './center-right2.component';

describe('CenterRight2Component', () => {
  let component: CenterRight2Component;
  let fixture: ComponentFixture<CenterRight2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterRight2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterRight2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
