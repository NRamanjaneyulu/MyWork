import { TestBed, inject } from '@angular/core/testing';

import { ErrorDetailsService } from './error-details.service';

describe('ErrorDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorDetailsService]
    });
  });

  it('should be created', inject([ErrorDetailsService], (service: ErrorDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
