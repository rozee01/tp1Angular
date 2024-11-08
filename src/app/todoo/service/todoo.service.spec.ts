import { TestBed } from '@angular/core/testing';

import { TodooService } from './todoo.service';

describe('TodooService', () => {
  let service: TodooService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodooService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
