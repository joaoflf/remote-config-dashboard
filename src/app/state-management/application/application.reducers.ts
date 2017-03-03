import { FeatureToggle } from './../feature-toggle/feature-toggle.model';
import { ADD_FEATURE_TOGGLE, REMOVE_FEATURE_TOGGLE, UPDATE_FEATURE_TOGGLE,
    UPDATE_APP_NAME, UPDATE_PROPERTIES } from './application.actions';
import { Action } from '@ngrx/store';
import { initialApplicationState } from './application.state';

 function applicationReducerFn(applicationState = initialApplicationState, action: Action) {
    let featureToggle: FeatureToggle, state: boolean, name: String,
        properties: Object;
    switch (action.type) {

        case UPDATE_APP_NAME:
            ({ name } = action.payload);
            return Object.assign({}, applicationState, { name: name });

        case ADD_FEATURE_TOGGLE:
            ({ featureToggle } = action.payload);
            return Object.assign({}, applicationState, {
                featureToggles: new Array<FeatureToggle>(
                    ...applicationState.featureToggles,
                    featureToggle
                )
            });

        case REMOVE_FEATURE_TOGGLE:
            ({ name } = action.payload);
            return Object.assign({}, applicationState, {
                featureToggles: applicationState.featureToggles.filter((toggle) => {
                    return toggle.name !== name;
                })
            });

        case UPDATE_FEATURE_TOGGLE:
            ({ name } = action.payload);
            ({ state } = action.payload);
            let updatedFeatureToggles = applicationState.featureToggles.map(toggle => {
                return toggle.name === name ? Object.assign({}, toggle, { state: state }) : toggle;
            });
            return Object.assign({}, applicationState, { featureToggles: updatedFeatureToggles });

        case UPDATE_PROPERTIES:
            ({ properties } = action.payload);
            return Object.assign({}, applicationState, { properties: properties });

        default: {
            return applicationState;
        }
    }
};

export const applicationReducer = applicationReducerFn;
