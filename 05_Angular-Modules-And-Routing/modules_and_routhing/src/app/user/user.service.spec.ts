import { TestBed } from '@angular/core/testing';

import { UserService as UserService } from './user.service';

describe('ServiceService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
