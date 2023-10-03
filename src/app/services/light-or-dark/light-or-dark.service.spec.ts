import { TestBed } from '@angular/core/testing';
import { LightOrDarkService } from './light-or-dark.service';

describe('LightOrDarkService', () => {
  let service: LightOrDarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LightOrDarkService] });
    service = TestBed.inject(LightOrDarkService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
