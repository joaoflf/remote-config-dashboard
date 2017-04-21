import {LOAD_APPS_SUCCESS} from '.';
import { apps } from '.';


describe('apps reducer', () => {
    it('should return current state when no valid actions have been made', () => {
        const state = [];
        const actual = apps(state, { type: 'INVALID_ACTION', payload: {} });
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should load apps', () => {
        const state = [];
        const actual = apps(state, { type: LOAD_APPS_SUCCESS,
            payload: [{id: '1', name: 'testApp1'} ,  {id: '2', name: 'testApp2'} ]});
        const expected =  [{id: '1', name: 'testApp1'} , {id: '2', name: 'testApp2'} ];
        expect(actual).toEqual(expected);
    });
});
