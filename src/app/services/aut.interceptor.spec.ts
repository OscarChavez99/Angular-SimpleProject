import { TestBed } from '@angular/core/testing';

import { AutInterceptor } from './aut.interceptor';

describe('AutInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutInterceptor = TestBed.inject(AutInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
