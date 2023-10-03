import { TestBed } from '@angular/core/testing';

import { SendTasksService } from './send-tasks.service';

describe('SendTasksService', () => {
  let service: SendTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
