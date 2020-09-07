import { TestBed } from '@angular/core/testing';

import { UiTypesService } from './ui-types.service';

describe('UiTypesService', () => {
  let service: UiTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
