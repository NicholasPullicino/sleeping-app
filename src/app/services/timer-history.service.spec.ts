import { TestBed } from '@angular/core/testing';

import { TimerHistoryService } from './timer-history.service';

describe('TimerHistoryService', () => {
  let service: TimerHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
