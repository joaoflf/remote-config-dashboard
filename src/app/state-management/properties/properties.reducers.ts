import { UPDATE_PROPERTIES, LOAD_PROPERTIES_SUCCESS } from './properties.actions';
import { Action } from '@ngrx/store';

 export function properties(propertiesState = {}, action: Action) {
    switch (action.type) {

        case LOAD_PROPERTIES_SUCCESS:
            return { ...action.payload};
        case UPDATE_PROPERTIES:
            return { ...propertiesState, ...action.payload};
        default: {
            return propertiesState;
        }
    }
};
