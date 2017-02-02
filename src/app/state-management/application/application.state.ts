import { FeatureToggle } from './../feature-toggle';
import { Application } from '.';

export const initialApplicationState: Application = {
  name: '',
  properties: {},
  featureToggles: new Array<FeatureToggle>()
};
