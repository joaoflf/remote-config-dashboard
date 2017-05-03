import { TestBed, inject } from '@angular/core/testing';

import { FeatureTogglesService } from './feature-toggles.service';
import { app } from '../state-management/app';
import { apps } from '../state-management/apps';
import { properties } from '../state-management/properties';
import { featureToggles } from '../state-management/feature-toggles';
import { StoreModule } from '@ngrx/store';

describe('FeatureTogglesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.provideStore({ featureToggles, properties, apps, app })],
      providers: [FeatureTogglesService]
    });
  });

  it('should ...', inject([FeatureTogglesService], (service: FeatureTogglesService) => {
    expect(service).toBeTruthy();
  }));
});
