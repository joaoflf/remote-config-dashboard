import { FeatureToggle } from './../feature-toggle/feature-toggle.model';
import { ADD_FEATURE_TOGGLE, REMOVE_FEATURE_TOGGLE, UPDATE_FEATURE_TOGGLE, UPDATE_APP_NAME } from './application.actions';
import { Application } from './application.model';
import { ActionReducer, Action } from '@ngrx/store';
import { initialApplicationState } from './application.state';

export const applicationReducer: ActionReducer<Application> = (applicationState = initialApplicationState, action: Action) => {
    let id: String, featureToggle: FeatureToggle, state: boolean, name: String;
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
            ({ id } = action.payload);
            return Object.assign({}, applicationState, {
                featureToggles: applicationState.featureToggles.filter((toggle) => {
                    return toggle.id !== id;
                })
            });
        case UPDATE_FEATURE_TOGGLE:
            ({ id } = action.payload);
            ({ state } = action.payload);
            let updatedFeatureToggles = applicationState.featureToggles.map(toggle => {
                return toggle.id === id ? Object.assign({}, toggle, { state: state }) : toggle;
            });
            return Object.assign({}, applicationState, { featureToggles: updatedFeatureToggles })
        default: {
            return applicationState;
        }
    }
}
