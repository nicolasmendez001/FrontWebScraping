import { TestBed } from '@angular/core/testing';

import { ServiceNoticiaService } from './service-noticia.service';

describe('ServiceNoticiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceNoticiaService = TestBed.get(ServiceNoticiaService);
    expect(service).toBeTruthy();
  });
});
