import { UPDATE_PROPERTIES } from './properties.actions';
import { Action } from '@ngrx/store';
import { initialPropertiesState } from './properties.state';

 export function properties(propertiesState = initialPropertiesState, action: Action) {
    switch (action.type) {

        case UPDATE_PROPERTIES:
            return Object.assign({}, propertiesState, action.payload);
        default: {
            return propertiesState;
        }
    }
};

