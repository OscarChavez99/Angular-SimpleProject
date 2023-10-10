import { TestBed } from '@angular/core/testing';

import { PeticionesService } from './peticiones.service';

describe('PeticionesService', () => {
  let service: PeticionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
