import {ADD_FEATURE_TOGGLE, REMOVE_FEATURE_TOGGLE, UPDATE_FEATURE_TOGGLE} from '.';
import { featureToggles } from '.';


describe('feature-toggles reducer', () => {
    it('should return current state when no valid actions have been made', () => {
        const state = [];
        const actual = featureToggles(state, { type: 'INVALID_ACTION', payload: {} });
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should add a feature toggle', () => {
        const state = [];
        const actual = featureToggles(state, { type: ADD_FEATURE_TOGGLE, payload: {name: 'testToggle', state: false} });
        const expected = {name: 'testToggle', state: false};
        expect(actual).toContain(expected);
    });

    it('should update a feature toggle', () => {
        const state = [{name: 'testToggle', state: true}];
        const actual = featureToggles(state, { type: UPDATE_FEATURE_TOGGLE, payload: {name: 'testToggle', state: false} });
        const expected = [{name: 'testToggle', state: false}];
        expect(actual).toEqual(expected);
    });

    it('should remove a feature toggle', () => {
        const state = [{name: 'testToggle', state: true}, {name: 'testToggle1', state: false}];
        const actual = featureToggles(state, { type: REMOVE_FEATURE_TOGGLE, payload: {name: 'testToggle'} });
        const expected = [{name: 'testToggle1', state: false}];
        expect(actual).toEqual(expected);
    });
});
