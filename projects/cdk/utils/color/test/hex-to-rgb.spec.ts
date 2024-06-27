import {describe, expect, it} from '@jest/globals';
import {tuiHexToRgb} from '@taiga-ui/cdk';

describe('tuiHexToRgb', () => {
    it('works', () => {
        expect(tuiHexToRgb('2aed03')).toEqual([42, 237, 3]);
    });
});
