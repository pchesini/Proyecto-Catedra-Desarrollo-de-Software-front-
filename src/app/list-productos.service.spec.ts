import { TestBed } from '@angular/core/testing';

import { ListProductosService } from './list-productos.service';

describe('ListProductosService', () => {
  let service: ListProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
