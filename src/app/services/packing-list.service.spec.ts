import { TestBed } from '@angular/core/testing';

import { PackingListService } from './packing-list.service';

describe('PackingListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackingListService = TestBed.get(PackingListService);
    expect(service).toBeTruthy();
  });
});
