import { LOAD_APPS, LOAD_APPS_SUCCESS } from './apps.actions';
import { Action } from '@ngrx/store';

 export function apps(appsState = [], action: Action) {
    switch (action.type) {
        case LOAD_APPS_SUCCESS:
            return [...action.payload];
        case LOAD_APPS:
            return appsState;
        default: {
            return appsState;
        }
    }
};

