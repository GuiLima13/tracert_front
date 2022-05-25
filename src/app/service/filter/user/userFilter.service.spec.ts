import { TestBed } from '@angular/core/testing';

import { UserFilterService } from './userFilter.service';

describe('UserService', () => {
  let service: UserFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
