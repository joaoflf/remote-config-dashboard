import { FeatureToggle } from './../feature-toggle/feature-toggle.model';
import { ADD_FEATURE_TOGGLE, REMOVE_FEATURE_TOGGLE } from './application.actions';
import { Application } from './application.model';
import { ActionReducer, Action } from '@ngrx/store';
import { initialApplicationState } from './application.state';

export const applicationReducer: ActionReducer<Application> = (state = initialApplicationState, action: Action) => {
    let id: String, featureToggle: FeatureToggle;
    switch (action.type) {
        case ADD_FEATURE_TOGGLE:
            ({ featureToggle } = action.payload);
            return Object.assign({}, state, {
                featureToggles: new Array<FeatureToggle>(
                    ...state.featureToggles,
                    featureToggle
                )
            });
        case REMOVE_FEATURE_TOGGLE:
            ({ id } = action.payload);
            return Object.assign({}, state, {
                featureToggles: state.featureToggles.filter((toggle) => {
                    return toggle.id !== id;
                })
            });
        default: {
            return state;
        }
    }
}
