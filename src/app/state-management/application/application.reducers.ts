import { App } from '../app';
import {
    APPLICATION_LAUNCH,
    UPDATE_APP_NAME,
    UPDATE_PROPERTIES,
    LOAD_APPS_SUCCESS
} from './application.actions';
import { Action } from '@ngrx/store';
import { initialApplicationState } from './application.state';

 export function applicationReducer(applicationState = initialApplicationState, action: Action) {
    let name: String, properties: Object, appList: Array<App>;
    switch (action.type) {

        case LOAD_APPS_SUCCESS:
            ({ appList } = action.payload);
            return Object.assign({}, applicationState, { appList: appList });

        case UPDATE_APP_NAME:
            ({ name } = action.payload);
           return Object.assign({}, applicationState, Object.assign({}, applicationState.app, { name: name }));

        case UPDATE_PROPERTIES:
            ({ properties } = action.payload);
            return Object.assign({}, applicationState, Object.assign({}, applicationState.app, { properties: properties }));
        case APPLICATION_LAUNCH:
            return applicationState;
        default: {
            return applicationState;
        }
    }
};

