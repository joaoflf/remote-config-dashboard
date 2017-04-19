import { Application } from '.';

export const initialApplicationState: Application = {
  app: {
    id: '1',
    name: 'Web App',
    properties: {
      termsConditionsURL: 'www.google.com',
      property1: 'I am a property'
    }
  },
  appList: []
};
