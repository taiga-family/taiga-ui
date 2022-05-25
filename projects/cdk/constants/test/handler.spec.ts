import {AbstractControl} from '@angular/forms';

import {ALWAYS_FALSE_HANDLER} from '../always-false-handler';
import {ALWAYS_TRUE_HANDLER} from '../always-true-handler';
import {EMPTY_VALIDATOR} from '../empty';

describe('Handler functions', () => {
    it('Always false', () => {
        expect(ALWAYS_FALSE_HANDLER()).toBe(false);
    });

    it('Always true', () => {
        expect(ALWAYS_TRUE_HANDLER()).toBe(true);
    });

    it('EMPTY_VALIDATOR', () => {
        expect(EMPTY_VALIDATOR({} as unknown as AbstractControl)).toBe(null);
    });
});
