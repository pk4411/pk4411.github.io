import { TestBed } from '@angular/core/testing';

import { SpaceServicesService } from './space-services.service';

describe('SpaceServicesService', () => {
  let service: SpaceServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
