import { TestBed } from '@angular/core/testing';

import { ExemploObservablesService } from './exemplo-observables.service';

describe('ExemploObservablesService', () => {
  let service: ExemploObservablesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExemploObservablesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
