import { TestBed } from '@angular/core/testing';

import { ForgetPasswordV2Service } from './forget-password-v2.service';

describe('ForgetPasswordV2Service', () => {
  let service: ForgetPasswordV2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetPasswordV2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
