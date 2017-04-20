import { UPDATE_APP_NAME } from './app.actions';
import { Action } from '@ngrx/store';

 export function app(appState = { id: '1', name: 'Web App', }, action: Action) {
    let name: String;
    switch (action.type) {

        case UPDATE_APP_NAME:
            ({ name } = action.payload);
           return { ...appState, name: name };

        default: {
            return appState;
        }
    }
};

