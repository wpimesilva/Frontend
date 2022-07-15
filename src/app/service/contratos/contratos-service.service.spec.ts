import { TestBed } from '@angular/core/testing';

import { ContratosServiceService } from './contratos-service.service';

describe('ContratosServiceService', () => {
  let service: ContratosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
