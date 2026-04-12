import { TestBed } from '@angular/core/testing';

import { LuxuryBroker } from './luxury-broker-service';

describe('LuxuryBroker', () => {
  let service: LuxuryBroker;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LuxuryBroker);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
