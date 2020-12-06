import { TestBed } from '@angular/core/testing';

import { AuthenticateserviceService } from './authenticateservice.service';

describe('AuthenticateserviceService', () => {
  let service: AuthenticateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
