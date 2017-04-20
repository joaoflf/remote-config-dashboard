import { App } from '../app';
import { APPLICATION_LAUNCH, UPDATE_APP_NAME, LOAD_APPS_SUCCESS } from './application.actions';
import { Action } from '@ngrx/store';
import { initialApplicationState } from './application.state';

 export function application(applicationState = initialApplicationState, action: Action) {
    let name: String, appList: Array<App>;
    switch (action.type) {

        case LOAD_APPS_SUCCESS:
            ({ appList } = action.payload);
            return Object.assign({}, applicationState, { appList: appList });

        case UPDATE_APP_NAME:
            ({ name } = action.payload);
           return Object.assign({}, applicationState, Object.assign({}, applicationState.app, { name: name }));

        case APPLICATION_LAUNCH:
            return applicationState;
        default: {
            return applicationState;
        }
    }
};

