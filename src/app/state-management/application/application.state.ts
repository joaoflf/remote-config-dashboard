import { FeatureToggle } from './../feature-toggle';
import { Application } from '.';

// export const initialApplicationState: Application = {
//   name: '',
//   properties: {},
//   featureToggles: new Array<FeatureToggle>()
// };
export const initialApplicationState: Application = {
  selectedApp: {
    id: 1,
    name: 'Web App'
  },
  properties: {
    termsConditionsURL: 'www.google.com',
    property1: 'I am a property'
  },
  featureToggles: new Array<FeatureToggle>(
    {
      name: 'testToggle',
      state: true
    },
    {
      name: 'testToggle2',
      state: false
    }
  ),
  appList: [{
    id: 1,
    name: 'Web App'
  },
  {
    id: 2,
    name: 'Android App'
  },
  {
    id: 3,
    name: 'iOS App'
  }]
};
