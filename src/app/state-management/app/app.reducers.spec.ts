import {UPDATE_APP_NAME} from '.';
import { app } from '.';


describe('app reducer', () => {
    it('should return current state when no valid actions have been made', () => {
        const state = { id: '1', name: 'Web App' };
        const actual = app(state, { type: 'INVALID_ACTION', payload: {} });
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should update an app name', () => {
        const state = { id: '1', name: 'Web App' };
        const actual = app(state, { type: UPDATE_APP_NAME,
            payload: {id: '1', name: 'testApp2'}});
        const expected =  {id: '1', name: 'testApp2'};
        expect(actual).toEqual(expected);
    });
});
