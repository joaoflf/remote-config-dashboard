import { FeatureToggle } from './../feature-toggle';
import { Application } from '.';

// export const initialApplicationState: Application = {
//   name: '',
//   properties: {},
//   featureToggles: new Array<FeatureToggle>()
// };
export const initialApplicationState: Application = {
  name: 'Costa Android',
  properties: {
    termsConditionsURL: 'www.google.com',
    property1: 'I am a property'
  },
  featureToggles: [
    {
      id: '1',
      name: 'testToggle',
      state: true
    },
    {
      id: '2',
      name: 'testToggle2',
      state: false
    }
  ]
};
