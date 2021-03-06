import {
    ADD_FEATURE_TOGGLE,
    LOAD_TOGGLES_SUCCESS,
    REMOVE_FEATURE_TOGGLE,
    UPDATE_FEATURE_TOGGLE
} from './feature-toggles.actions';
import { Action } from '@ngrx/store';

export function featureToggles(featureTogglesState = [], action: Action) {
    let state: boolean, name: String;
    switch (action.type) {

        case LOAD_TOGGLES_SUCCESS:
            return [...action.payload];

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
                { ...featureTogglesState[index], name: name, state: state },
                ...featureTogglesState.slice(index + 1)
            ];

        default: {
            return featureTogglesState;
        }
    }
};

