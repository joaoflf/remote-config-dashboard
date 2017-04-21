import {UPDATE_PROPERTIES} from '.';
import { properties } from '.';


describe('properties reducer', () => {
    it('should return current state when no valid actions have been made', () => {
        const state = {};
        const actual = properties(state, { type: 'INVALID_ACTION', payload: {} });
        const expected = state;
        expect(actual).toBe(expected);
    });

    it('should update properties', () => {
        const state = {property1: 'testValue', property2: 'testValue2'};
        const actual = properties(state, { type: UPDATE_PROPERTIES,
            payload: {property1: 'modifiedTestValue', property2: 'testValue2'} });
        const expected =  {property1: 'modifiedTestValue', property2: 'testValue2'};
        expect(actual).toEqual(expected);
    });
});
