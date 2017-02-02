import { FeatureToggle } from '../feature-toggle';

export interface Application {
    name: String;
    properties: {};
    featureToggles: Array<FeatureToggle>;
};
