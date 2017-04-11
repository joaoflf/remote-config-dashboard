import { FeatureToggle } from '../feature-toggle';
import { App } from '../app';

export interface Application {
    selectedApp: App;
    properties: Object;
    featureToggles: Array<FeatureToggle>;
    appList: Array<App>;
};
