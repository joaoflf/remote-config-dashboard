import { ADD_FEATURE_TOGGLE, REMOVE_FEATURE_TOGGLE, UPDATE_FEATURE_TOGGLE } from './feature-toggle.actions';
import { Action } from '@ngrx/store';
import { initialFeatureTogglesState } from './feature-toggle.state';

export function featureTogglesReducer(featureTogglesState = initialFeatureTogglesState, action: Action) {
    let state: boolean, name: String;
    switch (action.type) {

        case ADD_FEATURE_TOGGLE:
            ({ name } = action.payload);
            ({ state } = action.payload);
            return [...featureTogglesState, { name: name, state: state }];

        case REMOVE_FEATURE_TOGGLE:
            ({ name } = action.payload);
            return featureTogglesState.filter((toggle) => {
                return toggle.name !== name;
            });

        case UPDATE_FEATURE_TOGGLE:
            ({ name } = action.payload);
            ({ state } = action.payload);
            let index = featureTogglesState.map(toggle => toggle.name).indexOf(name);
            return [
                ...featureTogglesState.slice(0, index),
                Object.assign({}, featureTogglesState[index], { name: name, state: state }),
                ...featureTogglesState.slice(index + 1)
            ];

        default: {
            return initialFeatureTogglesState;
        }
    }
};

