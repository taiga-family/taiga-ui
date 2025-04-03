import {tuiEditingKeys} from '@taiga-ui/core/constants';

import {tuiIsEditingKey} from '../is-editing-key';

describe('tuiIsEditingKey', () => {
    it('returns false for undefined', () => {
        expect(tuiIsEditingKey(undefined)).toBe(false);
    });

    it('returns false for empty string', () => {
        expect(tuiIsEditingKey('')).toBe(false);
    });

    it('returns true for single character', () => {
        expect(tuiIsEditingKey('a')).toBe(true);
    });

    it('returns true for defined editing key', () => {
        expect(tuiIsEditingKey(tuiEditingKeys[0])).toBe(true);
    });
});
