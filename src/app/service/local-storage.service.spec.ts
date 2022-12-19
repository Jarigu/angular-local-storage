import { TestBed } from '@angular/core/testing';

import { LSService } from './local-storage.service';

describe('TodoService', () => {
  let service: LSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});