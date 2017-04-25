import { UPDATE_APP_NAME, LOAD_APP_SUCCESS } from './app.actions';
import { Action } from '@ngrx/store';

export function app(appState = {}, action: Action) {
    let id: String, name: String;
    switch (action.type) {

        case UPDATE_APP_NAME:
            ({ name } = action.payload);
            return { ...appState, name: name };
        case LOAD_APP_SUCCESS:
            ({ id } = action.payload);
            ({ name } = action.payload);
            return { ...appState, id: id, name: name };
        default: {
            return appState;
        }
    }
};

