/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResizeService } from './resize.service';

describe('Service: Resize', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResizeService]
    });
  });

  it('should ...', inject([ResizeService], (service: ResizeService) => {
    expect(service).toBeTruthy();
  }));
});
