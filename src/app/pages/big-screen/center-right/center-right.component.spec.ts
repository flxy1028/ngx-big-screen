/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CenterRightComponent } from './center-right.component';

describe('CenterRightComponent', () => {
  let component: CenterRightComponent;
  let fixture: ComponentFixture<CenterRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
