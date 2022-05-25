import { TestBed } from '@angular/core/testing';

import { EstabelecimentoFilterService } from './estabelecimento-filter.service';

describe('EstabelecimentoFilterService', () => {
  let service: EstabelecimentoFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstabelecimentoFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
